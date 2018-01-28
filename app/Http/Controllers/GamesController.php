<?php

namespace App\Http\Controllers;

use Exception;
use Validator;
use App\Http\Requests;
use Sangria\JSONResponse;
use Illuminate\Http\Request;
use App\Models\EventsDetails;
use App\Http\Controllers\Controller;
use App\Models\UserTokens;
use App\Models\FantasyCup;
use DB;

class GamesController extends Controller
{
    
    public function predictEvent(Request $request){
        try {
            $validator = Validator::make($request->all(),[
                'roll_no'  => 'required|digits:9',
                'event_name' => 'required',
                'hostel_name' => 'required',
                'token' => 'required',
            ]);
        
            if($validator->fails()) {
                $response = $validator->errors()->all();
                $status = 400;
                $message = "Invalid Parameters";
                return JSONResponse::response($status, $message);
            }
            
            $roll_no = $request->input('roll_no');
            $event_name = $request->input('event_name');
            $token = $request->input('token');
            $hostel_name= $request->input('hostel_name');
            

            $user = UserTokens::orderBy('id', 'desc')
                         ->where('roll_no', '=', $roll_no)
                         ->first();
            
            if ($user['token'] != $token)
                return JSONResponse::response("400", "Invalid token sent!");
            
        
            $event = EventsDetails::where('event_name','=',$event_name)
                    ->first();
            
			
			date_default_timezone_set('Asia/Calcutta');
			$current_date = date("Y-m-d");

            if ($event['event_date'] <= $current_date)
                return JSONResponse::response("400", "No more predictions will be accepted!");
            
            
            $prediction = FantasyCup::where('roll_no', '=', $roll_no)
                          ->where('event_name', '=', $event_name)
                          ->first();

            if ($prediction)
                return JSONResponse::response("400", "Seems like you've already submitted your prediction!");
            
            DB::beginTransaction();            
            $new_prediction = new FantasyCup;
            $new_prediction->roll_no = $roll_no;
            $new_prediction->event_name = $event_name;
            $new_prediction->hostel_name = $hostel_name;
            $new_prediction->save();
            DB::commit();

            return JSONResponse::response("200","Your prediction has been recorded!");
        } 
        catch (Exception $e){
            return JSONResponse::response(500,$e->getMessage());
        }
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Log;
use Validator;
use Exception;
use Redirect;
use Session;
use Sangria\IMAPAuth;
use Sangria\JSONResponse;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Models\UserTokens;

class LoginController extends Controller
{
    public function tshirtLogin(Request $request) {
        try {
            $validator = Validator::make($request->all(),[
                'roll_no'  => 'required|digits:9',
                'password' => 'required'
            ]);

        //check for valid parameters
        if($validator->fails()) {
            $response = $validator->errors()->all();
            $status = 400;
            $message = "Invalid Parameters";
            return JsonResponse::response($status, $message);
        }

            $roll_no  = $request->input('roll_no');
            $username = $roll_no."@nitt.edu";

            $password = $request->input('password');
            
            if(IMAPAuth::tauth($roll_no,$password)) {
            //if(true) {
                Log::info($roll_no." has logged in");
                Session::put([
                    'roll_no' => $roll_no,
                ]);

                $status_code = 200;
                $message = "Success";
                $user_auth = $roll_no . rand();
                $user_auth = sha1($user_auth);

                try{
                    DB::beginTransaction();
                    $new_token = new UserTokens;
                    $new_token->roll_no = $roll_no;
                    $new_token->token = $user_auth;
                    
                    $new_token->save();

                    DB::commit();
                    return JsonResponse::response($status_code, $user_auth);
                } catch (Exception $e) {
                    
					DB::rollBack();
					$response = $e->getMessage()." ".$e->getLine();
                    return JsonResponse::response("400", $response);                 
                }
            
            } else {
                Log::info($roll_no." has attempted to login and failed");
                $status_code = 400;
                $message = "Failure";
				return JsonResponse::response($status_code, $message);
				//return Redirect::to('/tshirt');
            }
        } catch (Exception $e) {
            $status_code = 500;
            $response = $e->getMessage()." ".$e->getLine();
            Log::error($response);        
            return JSONResponse::response($status_code,$response);
        }
    }
    public function tshirtLogout(Request $request) {
        try {
            $status_code = 200;
            $response = "You have been logged out";
            Log::info(Session::get('roll_no')." logged out");
            Session::flush();
            return JSONResponse::response($status_code,$response);
        } catch (Exception $e) {
            $status_code = 500;
            $response = $e->getMessage()." ".$e->getLine();
            return JSONResponse::response($status_code,$response);
        }
    }
}

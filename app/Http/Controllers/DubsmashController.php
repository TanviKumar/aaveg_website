<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Log;
use Validator;
use Exception;
use Carbon\Carbon;
use Sangria\JSONResponse;
use App\Models\Dubsmash;

class DubsmashController extends Controller
{
    public function submitDubsmash(Request $request) {
        $validator = Validator::make($request->all(), [
            'name1'         => 'required|string',
            'rollNo1'       => 'required|integer|digits:9',
            'hostel'        => 'required|string',
            'dubsmash-file' => 'required'
        ]);
        if($validator->fails()) {
            $message = $validator->errors()->all();
            Log::info($validator->errors()->all());
            return 'Submission Failed. Please Try Again. Ensure the filesize of the video is less than 10Mb.';
        }

        $name1    = $request->input('name1');
        $rollNo1  = $request->input('rollNo1');
        $hostel   = $request->input('hostel');

        $video  = $request->file('dubsmash-file');
        $extension = $video->getClientOriginalExtension();

        $filename = $rollNo1.'_'.Carbon::now().".".$extension;
        $filename = str_replace(' ','',$filename);

        $data = new Dubsmash();
        $data->name1 = $name1;
        $data->rollNo1 = $rollNo1;
        $data->hostel = $hostel;
        $data->video_path = $filename;
        Log::info('Saving .... ');
        $data->save();

        $video->move(storage_path('dubsmash'), $filename);

        return 'Submitted Successfully';
    }
}

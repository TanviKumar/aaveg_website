<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FantasyCup extends Model
{
    protected $table = 'fantasy_cup';
    protected $fillable = ['roll_no', 'event_name', 'hostel_name'];
    public $timestamps = false;
}

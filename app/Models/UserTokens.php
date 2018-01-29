<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserTokens extends Model
{
    protected $table = 'user_tokens';
    protected $fillable = ['roll_no', 'token'];
    public $timestamps = false;
}

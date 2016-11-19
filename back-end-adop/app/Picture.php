<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    protected $fillable = ['id_animal', 'url',];

    protected $hidden = [ 'remember_token',];
}

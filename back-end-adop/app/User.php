<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = ['nome', 'email', 'senha', 'whatsapp',];

    protected $hidden = [ 'senha', 'remember_token',];
}

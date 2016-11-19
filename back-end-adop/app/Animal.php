<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    protected $fillable = ['raca', 'especie', 'endereco', 'nascimento', 'sexo', 'descricao'];

    protected $hidden = ['remember_token',];
}

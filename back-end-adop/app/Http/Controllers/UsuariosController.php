<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\User as User;

class UsuariosController extends Controller
{
    
    public function autenticar(Request $request){
        $users = User::get();
        foreach($users as $u){
            if ($u->email == $request->input('email')){
                if($u->senha == $request->input('senha')){
                    echo "Cool";
                    return ["response" => "true"];
                }
                echo "Not Cool";
            }
        }
        echo "Really not cool";
        return ["response" => "false"];
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $usuario = new User();
        $usuario->name = $request->nombre;
        $usuario->password=$request->password;
        $usuario->email=$request->email;
        $usuario->usuario=$request->usuario;
        $usuario->edad=$request->edad;
        $usuario->telefono=$request->telefono;
        $usuario->direccion=$request->direccion;
        $usuario->ciudad=$request->ciudad;
        $usuario->estado=$request->estado;
        $usuario->pais=$request->pais;
        $usuario->fecha=$request->fecha;
        $usuario->codigopostal=$request->codigopostal;
        $usuario->remember_token = Str::random(10);
        $usuario->save();

        return response()->json([
            "message"=>"usuario creado correctamente",
        ],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function login (Request $request){
        $usuario=User::where('usuario',$request->usuario)->first();
        if($usuario->password == $request->password){
            return response()->json([
                "status" => 200,
                "message"=>"usuario loguado correctamente",
                "usuario"=>[
                    "name"=>$usuario->name,
                    "email"=>$usuario->email,
                ]
            ]);
        }else{
            return response()->json([
                "message"=>"usuario o contraseña incorrectamente",
            ], 201);
        }
    }
}

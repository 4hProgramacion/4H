<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clientes=Cliente::all();
        // return $clientes to json response;
        return response()->json($clientes);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cliente = new Cliente;
        $cliente->nombre=$request->nombre;
        $cliente->apellido=$request->apellido;
        $cliente->direccion=$request->direccion;
        $cliente->ciudad=$request->ciudad;
        $cliente->estado=$request->estado;
        $cliente->pais=$request->pais;
        $cliente->telefono=$request->telefono;
        $cliente->celular=$request->celular;
        $cliente->email=$request->email;
        $cliente->fecha_nacimiento=$request->fecha_nacimiento;
        $cliente->save();
        $data = [
            'message' => 'Cliente creado correctamente',
            'cliente' => $cliente
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function show(Cliente $cliente)
    {
        if(!$cliente){
            return response()->json([
                'message'=>'Cliente no encontrado',
                'code'=>404
            ],404);
        }
            return response()->json($cliente);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function edit(Cliente $cliente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Clientes  $cliente
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cliente $cliente)
    {
        $cliente->nombre=$request->nombre;
        $cliente->apellido=$request->apellido;
        $cliente->direccion=$request->direccion;
        $cliente->ciudad=$request->ciudad;
        $cliente->estado=$request->estado;
        $cliente->pais=$request->pais;
        $cliente->telefono=$request->telefono;
        $cliente->celular=$request->celular;
        $cliente->email=$request->email;
        $cliente->fecha_nacimiento=$request->fecha_nacimiento;
        $cliente->save();
        $data = [
            'message' => 'Cliente actualizado correctamente',
            'cliente' => $cliente
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Clientes  $cliente
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cliente $cliente)
    {
         $cliente->delete();
        $data = [
            'message' => 'Cliente eliminado correctamente',
            'cliente' => $cliente
        ];
        return response()->json($data);
    }

    public function ventas(Request $request)
    {
        $cliente = Cliente::find($request->clientes_id);
        $cliente->productos()->attach($request->producto_id);

        $data = [
            'message' => 'Venta creada correctamente',
            'venta' => $cliente
        ];
         return response()->json($data);
    }
}

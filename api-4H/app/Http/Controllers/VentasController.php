<?php

namespace App\Http\Controllers;

use App\Models\Ventas;
use App\Models\Productos;
use App\Models\Cliente;
use Illuminate\Http\Request;

class VentasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $cliente = Cliente::find($request->clientes_id);

        $producto = Productos::find($request->productos_id);
        $venta = new Ventas();
    
        $venta->clientes_id = $request->clientes_id;
        $venta->productos_id = $request->productos_id;
        $venta->cantidad = $request->cantidad;
        $venta->precio = $request->precio;
        $venta->save();

        $data = [
            'message' => 'Venta creada correctamente',
            'venta' => $venta,
            'cliente' => $cliente,
            'producto' => $producto,
            'total' => $request->cantidad * $request->precio
        ];
         return response()->json($data);
        
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ventas  $ventas
     * @return \Illuminate\Http\Response
     */
    public function show(Ventas $ventas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ventas  $ventas
     * @return \Illuminate\Http\Response
     */
    public function edit(Ventas $ventas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ventas  $ventas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ventas $ventas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ventas  $ventas
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ventas $ventas)
    {
        //
    }
}

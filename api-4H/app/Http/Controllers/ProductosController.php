<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;

class ProductosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Productos::all();
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
        
        $producto = new Productos;
        $producto->descripcion=$request->descripcion;
        $producto->unidad=$request->unidad;
        $producto->precio=$request->precio;
        $producto->color=$request->color;
        $producto->talla=$request->talla;
        $producto->marca=$request->marca;
        $producto->modelo=$request->modelo;
        $producto->created_at = now();
        $producto->updated_at = now();
        $producto->save();
        $data=[
            'message'=>'Producto creado correctamente',
            'producto'=>$producto
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Productos  $productos
     * @return \Illuminate\Http\Response
     */
    public function show(Productos $productos)
    {
        // return response data in jason
        return response()->json($productos);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Productos  $productos
     * @return \Illuminate\Http\Response
     */
    public function edit(Productos $productos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Productos  $productos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Productos $producto)
    {
        $producto->descripcion=$request->descripcion;
        $producto->unidad=$request->unidad;
        $producto->precio=$request->precio;
        $producto->color=$request->color;
        $producto->talla=$request->talla;
        $producto->marca=$request->marca;
        $producto->modelo=$request->modelo;
        $producto->save();
        $data=[
            'message'=>'Producto actualizado correctamente',
            'producto'=>$producto
        ];
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Productos  $productos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Productos $productos)
    {
        $producto->delete();
        return response()->json([
            'message'=>'Producto eliminado correctamente'
        ]);
    }
}

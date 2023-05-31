<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("clientes", "App\Http\Controllers\ClientesController@index");
Route::post("clientes", "App\Http\Controllers\ClientesController@store");
Route::get("clientes/{cliente}", "App\Http\Controllers\ClientesController@show");
Route::put("clientes/{cliente}", "App\Http\Controllers\ClientesController@update");
Route::delete("clientes/{cliente}", "App\Http\Controllers\ClientesController@destroy");

Route::get("productos", "App\Http\Controllers\ProductosController@index");
Route::post("productos", "App\Http\Controllers\ProductosController@store");
Route::get("productos/{producto}", "App\Http\Controllers\ProductosController@show");
Route::put("productos/{producto}", "App\Http\Controllers\ProductosController@update");
Route::delete("productos/{producto}", "App\Http\Controllers\ProductosController@destroy");

Route::post("ventas", "App\Http\Controllers\VentasController@store");

Route::get("ListadoUsuarios", "App\Http\Controllers\UserController@index");//utilizado para enviar todos los usuarios a un frontend.
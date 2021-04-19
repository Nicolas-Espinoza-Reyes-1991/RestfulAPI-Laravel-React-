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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/formulario/TipoEmpresa', 'App\Http\Controllers\API\FormularioController@list_tipo_empresa');
Route::post('/formulario/create', 'App\Http\Controllers\API\FormularioController@create');
Route::get('/formulario/list', 'App\Http\Controllers\API\FormularioController@list');
Route::get('/formulario/get/{id}', 'App\Http\Controllers\API\FormularioController@get');
Route::put('/formulario/update/{id}', 'App\Http\Controllers\API\FormularioController@update');
Route::delete('/formulario/delete/{id}', 'App\Http\Controllers\API\FormularioController@delete');
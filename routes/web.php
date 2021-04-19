<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });



Route::get('/', function () {
    return view('formulario');
});


Route::get('/formulario', 'App\Http\Controllers\FormularioController@index');
Route::get('/formulario/index', 'App\Http\Controllers\FormularioController@index');
Route::get('/formulario/list', 'App\Http\Controllers\FormularioController@index');
Route::get('/formulario/form', 'App\Http\Controllers\FormularioController@index');
Route::get('/formulario/edit/{num}', 'App\Http\Controllers\FormularioController@index');


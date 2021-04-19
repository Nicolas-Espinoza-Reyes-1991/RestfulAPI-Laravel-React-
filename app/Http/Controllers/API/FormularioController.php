<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TipoEmpresa;
use App\Models\Empresa;

class FormularioController extends Controller
{
    //

    public function list_tipo_empresa(){
    	$data=TipoEmpresa::get();
    	$response['data'] = $data;
      
      	$response['succes'] = true;
      	return $response;
    }

    public function create(Request $request){
      try {
        $insert['nombre'] = $request['nombre'];
        $insert['numero_trabajador'] = $request['numero_trabajador'];
        $insert['tipo_empresa'] = $request['tipo_empresa'];
        Empresa::insert($insert);
        $response['message'] = "Datos Guardados";
        $response['succes'] = true;
      } catch (\Exception $e) {
        $response['message'] = "Debe Completar Todos los Datos del Formulario";
        $response['succes'] = false;
      }
      return $response;
    }


    public function list(){
      try {
        $data = Empresa::with("tipo_empresa")->get();
        $response['data'] = $data;
        $response['message'] = "Ejecutado Correctamente";
        $response['succes'] = true;
      } catch (\Exception $e) {
        $response['message'] = $e->getMessage();
        $response['succes'] = false;
      }
      return $response;
    }


    public function get($id){
      try {
        $data = Empresa::with("tipo_empresa")->find($id);
        if ($data) {
          $response['data'] = $data;
          $response['message'] = "Datos Cargados";
          $response['succes'] = true;
        }else{
          $response['data'] = $data;
          $response['message'] = "No se encontro el id => $id";
          $response['succes'] = false;
        }
      } catch (\Exception $e) {
        $response['message'] = $e->getMessage();
        $response['succes'] = false;
      }
       return $response;
    }



    public function update(Request $request,$id){

      try {

        $data['nombre'] = $request['nombre'];
        $data['numero_trabajador'] = $request['numero_trabajador'];
        $data['tipo_empresa'] = $request['tipo_empresa'];

        Empresa::where("id",$id)->update($data);

        $response['message'] = "Los Datos se Actualizaron Correctamente";
        $response['success'] = true;

      } catch (\Exception $e) {
        $response['message'] = "Debe Completar Todos los Datos del Formulario";
        $response['success'] = false;
      }
      return $response;


    }


    public function delete($id){

      try {
        $res = Empresa::where("id",$id)->delete();
        $response['res'] = $res;
        $response['message'] = "Deleted successful";
        $response['success'] = true; 
      } catch (\Exception $e) {
        $response['message'] = $e->getMessage();
        $response['success'] = false;
      }

      return $response;
    }
    
}

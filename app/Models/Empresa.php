<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;

    protected $table = "empresa";

    protected $fillable = [
      'nombre',
      'numero_trabajador',
      'tipo_empresa'
    ];

    public function tipo_empresa(){
      return $this->belongsTo("App\Models\TipoEmpresa","tipo_empresa");
    }
}

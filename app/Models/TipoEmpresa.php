<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoEmpresa extends Model
{
    use HasFactory;

    protected $table = "tipo_empresa";

    protected  $primaryKey = "tipo_empresa_id";

    protected $fillable = [
      'descripcion'
    ];

    public $timestamps = false;
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    public function productos()
    {
        return $this->belongsToMany(Productos::class,'venta_cliente');
    }

    public function mensaje()
    {
        return json_encode('Cliente creado correctamente');
    }
}

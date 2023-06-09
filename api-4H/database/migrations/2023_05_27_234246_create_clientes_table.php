<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table -> string('nombre');
            $table -> string('apellido');
            $table -> string('direccion');
            $table -> string('ciudad');
            $table -> string('estado');
            $table -> string('pais');
            $table -> string('telefono')->nullable();
            $table -> string('celular')->nullable();
            $table -> string('email')->unique();
            $table -> date ('fecha_nacimiento');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
};

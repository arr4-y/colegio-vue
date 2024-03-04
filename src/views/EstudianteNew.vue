<template>
  <div class="row mt-3">
    <div class="col-md-4 mx-auto offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Registrar estudiante
        </div>
        <div class="card-body mx-auto">
          <form v-on:submit="guardar">
            <div class="d-grid col-6 mx-auto mb-3">
              <img v-if="this.foto" height="100" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
              <img v-else height="100" src="https://cdn3.iconfinder.com/data/icons/avatar-user/64/Artboard_34-256.png" class="img-thumbnail" id="fotoimg" alt="">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese su nombre" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="apellido" id="apellido" placeholder="Ingrese su apellido" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-calendar"></i></span>
              <input type="date" v-model="estudiante_fecnac" id="estudiante_fecnac" placeholder="Fecha de nacimiento" required maxlength="50" class="form-control">
              </div>

                          
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-address-card"></i></span>
              <input type="text" v-model="estudiante_dni" id="estudiante_dni" placeholder="DNI" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
              <input type="text" v-model="estudiante_telf" id="estudiante_telf" placeholder="Teléfono" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
              <input type="email" v-model="email" id="email" placeholder="Correo electrónico" required maxlength="50" class="form-control">
            </div>






            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
              <input v-on:change="previsualizarFoto" type="file" accept="image/png, image/jpeg, image/jpg, image/gif" class="form-control">
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"> Registrar</i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from '../funciones'

export default{
data(){
  return{
    nombre:'',
    apellido:'',
    estudiante_fecnac:'',
    estudiante_dni:'',
    estudiante_telf:'',
    email:'',
    foto:'',
    url:'https://34.16.157.105/api/estudiantes',
    cargando:false
  }
},

methods:{
  guardar(){
    event.preventDefault();
    var miFoto =document.getElementById('fotoimg');
    this.foto = miFoto.src;
    
    if(this.nombre.trim()==''){
      mostrarAlerta('Ingrese un nombre','warning','nombre');
    }else if(this.apellido.trim()==''){
      mostrarAlerta('Ingrese un apellido','warning','apellido');
    }else if(this.estudiante_fecnac.trim()==''){
      mostrarAlerta('Ingrese una fecha de nacimiento','warning','estudiante_fecnac');
    } else if(this.estudiante_dni.trim()==''){
      mostrarAlerta('Ingrese un DNI','warning','estudiante_dni');
    } else if(this.estudiante_telf.trim()==''){
      mostrarAlerta('Ingrese un teléfono','warning','estudiante_telf');
    } else if(this.email.trim()==''){
      mostrarAlerta('Ingrese un correo electrónico','warning','email');
    } else {
      var parametros ={
        nombre:this.nombre.trim(),
        apellido:this.apellido.trim(),
        estudiante_fecnac:this.estudiante_fecnac.trim(),
        estudiante_dni:this.estudiante_dni.trim(),
        estudiante_telf:this.estudiante_telf.trim(),
        email:this.email.trim(),
        foto:this.foto.trim()}
      enviarSolicitud('POST',parametros,this.url,'Estudiante registrado!!');
    }
  },
  previsualizarFoto(event){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function(){
      var miFoto =document.getElementById('fotoimg');
      miFoto.src = reader.result;
      this.foto = miFoto.src;
    }
  }
}
}
</script>

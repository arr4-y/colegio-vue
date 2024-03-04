<template>
  <div class="row mt-3">
    <div class="col-md-4 mx-auto offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Detalle del estudiante
        </div>
        <div class="card-body mx-auto">
          <div class="d-grid col-6 mx-auto mb-3">
            <router-link :to="{path:'/'}" class="btn btn-info">
              <i class="fa-solid fa-arrow-left"></i> Regresar a la lista
            </router-link>
          </div>
          <div class="d-grid col-6 mx-auto mb-3">
            <img v-if="foto" height="100" :src="foto" id="fotoimg" class="img-thumbnail" alt="">
            <img v-else height="100" src="https://cdn3.iconfinder.com/data/icons/avatar-user/64/Artboard_34-256.png" class="img-thumbnail" id="fotoimg" alt="">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
            <label v-text="nombre" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
            <label v-text="apellido" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-calendar"></i></span>
            <label v-text="estudiante_fecnac" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-id-card"></i></span>
            <label v-text="estudiante_dni" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
            <label v-text="estudiante_telf" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
            <label v-text="email" class="form-control"></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from '../funciones';
import { useRoute } from 'vue-router';
import axios from 'axios';




export default {
  data() {
    return {
      id: 0,
      foto: '',
      nombre: '', 
      apellido: '',
      estudiante_fecnac: '',
      estudiante_dni: '',
      estudiante_telf: '',
      email: '',    
      url: 'http://34.125.126.86/api/estudiantes',
      cargando: false
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/' + this.id;
    this.getEstudiante();
  },
  methods: {
    getEstudiante() {
      axios.get(this.url)
        .then(res => {
          const data = res.data.data;
          this.nombre = data.nombre;
          this.apellido = data.apellido;
          this.estudiante_fecnac = data.estudiante_fecnac;
          this.estudiante_dni = data.estudiante_dni;
          this.estudiante_telf = data.estudiante_telf;
          this.email = data.email;
          this.foto = data.foto;
        })
        .catch(error => {
          console.error('Error al obtener datos del estudiante:', error);
          mostrarAlerta('Error al obtener datos del estudiante', 'error');
        });
    }
  }
};
</script>

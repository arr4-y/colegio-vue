<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>FOTO</th>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>FECHA DE NACIMIENTO</th>
              <th>DNI</th>
              <th>TELÉFONO</th>
              <th>EMAIL</th>
              <th>REGISTRO</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="cargando">
              <td colspan="11"><h3>Cargando...</h3></td>
            </tr>
            <tr v-else v-for="(est, i) in estudiantes" :key="est.id">
            <!--  <td>{{ i + 1 }}</td>  -->
              <td>{{ est.id }}</td>
              <td>
                <img v-if="est.foto" style="width: 150px !important;" :src="est.foto" class="img-thumbnail" alt="">
                <img v-else style="width: 150px !important;" src="https://cdn3.iconfinder.com/data/icons/avatar-user/64/Artboard_34-256.png" class="img-thumbnail" alt="">
              </td>
              <td>{{ est.nombre }}</td>
              <td>{{ est.apellido }}</td>
              <td>{{ est.estudiante_fecnac }}</td>
              <td>{{ est.estudiante_dni }}</td>
              <td>{{ est.estudiante_telf }}</td>
              <td>{{ est.email }}</td>
              <td>{{ new Date(est.created_at).toLocaleDateString() }}</td>
              <td>
                <router-link :to="{ path: 'viewE/' + est.id }" class="btn btn-info">
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link :to="{ path: 'editE/' + est.id }" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger" @click="eliminar(est.id, est.nombre)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import { confirmar, mostrarAlerta } from '../funciones';

export default {
  data() {
    return {
      estudiantes: null,
      cargando: false,
      nuevoEstudiante: {
        nombre: '',
        apellido: '',
        foto: '',
        estudiante_fecnac: '',
        estudiante_dni: '',
        estudiante_telf: '',
        email: ''
      }
    };
  },
  mounted() {
    this.getEstudiantes();
  },
  methods: {
    getEstudiantes() {
      this.cargando = true;
      axios.get('https://34.125.126.86/api/estudiantes')
         .then(res => {
          this.estudiantes = res.data;
          this.cargando = false;
        })
        .catch(error => {
          console.error('Error al obtener datos del estudiante:', error);
          mostrarAlerta('Error al obtener datos del estudiante', 'error');
          this.cargando = false;
        });
    },
    eliminar(id, nombre) {
      confirmar('https://34.125.126.86/api/estudiantes', id, 'Eliminar registro', 'Realmente desea eliminar a ' + nombre + '?');
    },
    agregarEstudiante() {
      axios.post('https://34.125.126.86/api/estudiantes', this.nuevoEstudiante)
        .then(() => {
          mostrarAlerta('Estudiante agregado exitosamente', 'success');
          this.nuevoEstudiante = {
            nombre: '',
            apellido: '',
            foto: '',
            estudiante_fecnac: '',
            estudiante_dni: '',
            estudiante_telf: '',
            email: ''
          };
          this.getEstudiantes();
        })
        .catch(error => {
          console.error('Error al agregar estudiante:', error);
          mostrarAlerta('Error al agregar estudiante', 'error');
        });
    }
  }
};
</script>









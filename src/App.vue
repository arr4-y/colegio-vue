<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GESTION ACADEMICA</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">INICIO</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ESTUDIANTES
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/"
                  >Listar estudiantes</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/createE"
                  >Registrar nuevo</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              CURSOS
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/createC"
                  >Listar cursos</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              DOCENTES
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/createD"
                  >Listar docentes</router-link
                >
              </li>
            </ul>

          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MATRICULAS
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/createM"
                  >Listar matriculas</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              NOTAS
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/createN"
                  >Listar notas</router-link
                >
              </li>
            </ul>
          </li>

          <li>
            <router-link class="nav-link" to="/createU">USUARIOS</router-link>
          </li>

     




        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view />
  </div>
</template>

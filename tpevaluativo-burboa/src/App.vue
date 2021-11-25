<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/catalogopublic">Catalogo</router-link>
        <router-link class="nav-link" to="/catalogoadmin">Carga de productos</router-link>
      </div>
      <div class="navbar-nav ms-auto">
        <h5 class="nav-link">{{this.usuario?.email}}</h5>
        <div class="btn-group">
          <button class="btn btn-secondary dropdown-toggle" v-if="usuario?.email !=null" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            opciones
          </button>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" @click="cerrar_sesion()">Cerrar sesion</button></li>
            <li><router-link class="dropdown-item" to="/editarusuario">Editar usuario</router-link></li>
          </ul>
        </div>
        <router-link v-if="usuario?.email == null" class="nav-link" to="/autenticacion">Registrar</router-link>
      </div>
    </div>
  </div>
</nav>  
<div class="container mt-3">
  <router-view/>
</div>

</template>

<script>
import{onAuthStateChanged, signOut} from 'firebase/auth'
import{auth} from '@/utils/firebase.js'
export default {
  data(){
    return{
      res:'',
      usuario:null,
      estado2:0
    }
  },
  methods:{
    obtener_usuario_logueado(){
      onAuthStateChanged(auth,(user)=> {
        this.usuario = user;
      })
    },
    async cerrar_sesion(){
      var res = confirm('¿Esta seguro que quiere cerrar sesion?')
      if(res == true){
        try {
        await signOut(auth)
        } 
      catch (error) {
        alert('Error')
        
        }
      }
    }
  },
  mounted(){
    this.obtener_usuario_logueado()
  }
}
</script>

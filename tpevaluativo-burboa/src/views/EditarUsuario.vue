<template>
    <div class="row justify-content-md-center">
        <div class="col-md-auto">
            <div class="mb-3">
                <label class="form-label">Correo</label>
                <input v-model="correo" class="form-control" type="email">
            </div>
            <div class="mb-3">
                <h1>No pude hacer que funcione el cambiar de contraseña</h1>
                <label class="form-label">Contraseña</label>
                <input v-model="contraseña" class="form-control" type="password">
            </div>
            <div class="text-center">
                <button class="btn btn-info" @click="editar_usuario()">Editar usuario</button>
                <button class="btn btn-warning" @click="eliminar_usuario()">Eliminar usuario</button>
                <button class="btn btn-danger">Cancelar</button>
            </div>
        </div>
    </div>
</template>
<script>
import {auth} from '@/utils/firebase.js'
import {updateEmail, updatePassword, signOut, deleteUser} from 'firebase/auth'
export default {
    name:'AutenticacionForm',
    data(){
        return{
            correo:'',
            contraseña:'',
            respuesta:''
        }
    },
    methods:{
        vaciar(){
            this.correo = ''
            this.contraseña = ''
            this.respuesta = ''
        },
        async editar_usuario(){
        var respuesta = confirm('¿Esta seguro que quiere editar el usuario?')
        if (respuesta == true){
            try{
                updateEmail(auth.currentUser, this.correo)
                updatePassword(auth.currentUser, this.contraseña)
                alert('Trabajo exitoso')
                await signOut(auth)
                this.vaciar()
            }
            catch(error){
                alert('Error')
            }
        } else{
            alert('Tenga mas cuidado')
            this.vaciar()
        }
        
        },
        eliminar_usuario(){
            deleteUser(auth.currentUser)
        }

    }
}
</script>
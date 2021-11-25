<template>
    <div class="row justify-content-md-center">
        <div class="col-md-auto">
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model="nombre" class="form-control" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label">Apellido</label>
                <input v-model="apellido" class="form-control" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label">Correo</label>
                <input v-model="correo" class="form-control" type="email">
            </div>
            <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input v-model="contraseña" class="form-control" type="password">
            </div>
            <div class="text-center">
                <button @click="registrar_usuario()" class="btn btn-success">Registrar</button>
                <button @click="iniciar_sesion()" class="btn btn-danger">Iniciar sesion</button>
            </div>
        </div>
    </div>
</template>
<script>
import {addDoc,collection} from '@firebase/firestore'
import {auth} from '@/utils/firebase.js'
import {db} from '../utils/firebase.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
export default {
    name:'AutenticacionForm',
    data(){
        return{
            correo:'',
            contraseña:'',
            respuesta:'',
            respuestainicio:'',
            nombre:'',
            apellido:''
        }
    },
    methods:{
        vaciar(){
            this.correo = ''
            this.contraseña = ''
            this.respuesta = ''
            this.nombre=''
            this.apellido=''
            this.respuestainicio=''
        },
        async registrar_usuario(){
            var respuesta=confirm("¿Esta seguro que quiere registrarte?")
            if (respuesta==true){
                try {
                    const respuesta123 =  await createUserWithEmailAndPassword(auth,this.correo,this.contraseña)
                    console.log(respuesta123)
                    const objetoProducto = {
                        nombre: this.nombre,
                        apellido: this.apellido,
                    }
                    const coleccion = collection(db,'usuario')
                    addDoc(coleccion,objetoProducto)
                    this.vaciar()
                    alert("Usuario registrado con exito")
                    this.vaciar()
                } catch (error) {
                    alert("Algo sucedio")
                }
                
            }
            else{
                alert("No registrado exitosamente")
                this.vaciar()
            }
        },
        iniciar_sesion(){
            var respuestainicio=confirm("¿Esta seguro que quiere iniciar sesion?")
            if (respuestainicio==true){
                try {
                    signInWithEmailAndPassword(auth,this.correo,this.contraseña)
                    alert("Inicio sesion exitosa")
                    this.vaciar()
                } catch (error) {
                    alert("Algo sucedio")
                }
                
            }
            else{
                alert("Error, verifique sus datos")
                this.vaciar()
            }
        }
    }
}
</script>
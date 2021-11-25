<template>
    <div class="row">
        <template  v-for="catalogo of lista_producto" v-bind:key="catalogo.id">
            <div v-if="catalogo.opcion == 'Activo'"   class="col-lg-3 col-md-4 col-12 me-1" >
                <div class="card">
                    <img :src="catalogo.URL" class="card-img-top" style="height:10rem">
                    <div class="card-body">
                        <h5 class="card-title">{{catalogo.descripcion}}</h5>
                        <h5 class="card-text" v-if="catalogo.porcentaje > 0">${{ (catalogo.porcentaje * catalogo.precio) / 100 }}<del class="card-text">(${{catalogo.precio}})</del></h5>
                        <h5 class="card-text" v-else>${{catalogo.precio}}</h5>
                        <p class="card-text">{{catalogo.opcion}}</p>
                        <a class="btn btn-primary">comprar</a>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import {collection, onSnapshot} from '@firebase/firestore'
import {db} from '../utils/firebase.js'
export default {
    name:'Catalogo',
        data(){
            return{
                lista_producto :[]
            }
        },
        methods:{
                obtener_producto(){
                onSnapshot( collection(db,'catalogo'),(snapshot) => {
                    snapshot.docs.map((doc) =>{
                        this.lista_producto.push({...doc.data(), id:doc.id})
                    })
                })
            },
        },
        mounted(){
            this.obtener_producto()
        }
}
</script>
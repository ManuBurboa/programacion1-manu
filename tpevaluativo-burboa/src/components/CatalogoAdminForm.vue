<template>
    <div class="row">
        <div class="col-2">
            <div class="mb-3">
                <label class="form-label">Descripcion</label>
                <input v-model="descripcion" class="form-control" placeholder="Ingrese la descripcion" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label">Precio</label>
                <input v-model="precio" class="form-control" placeholder="Ingrese el precio de venta" type="number">
            </div>
            <div class="mb-3">
                <label class="form-label">Porcentaje de descuento</label>
                <input v-model="porcentaje" class="form-control" placeholder="Ingrese el precio de compra" type="number">
            </div>
            <div class="mb-3">
                <label class="form-label">Categoria</label>
                <input v-model="categoria" class="form-control" placeholder="Ingrese la categoria" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label">Stock</label>
                <input v-model="stock" class="form-control" placeholder="Ingrese el stock" type="number">
            </div>
            <div class="mb-3">
                <label class="form-label">Estado</label>
                <select v-model="opcion" class="form-select">
                    <option value="Seleccionar" selected="true" disabled="">Seleccionar</option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Adjuntar imagen</label>
                <input id="inp_file" type="file">
            </div>
            <button v-if="estado == 0" @click="guardar_producto()" class="btn btn-danger">Guardar</button>
            <button v-if="estado == 1" @click="actualizar_producto()" class="btn btn-primary">Actualizar</button>
        </div>
        <div class="col-10">
            <table class="table">
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>% de descuento</th>
                        <th>Categoria</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="catalogo of lista_producto" v-bind:key="catalogo.id">
                        <td>
                            <img style="width:7rem" :src="catalogo.URL" alt="">
                        </td>
                        <td>{{catalogo.descripcion}}</td>
                        <td>{{catalogo.precio}}</td>
                        <td>{{catalogo.porcentaje}}</td>
                        <td>{{catalogo.categoria}}</td>
                        <td>{{catalogo.stock}}</td>
                        <td>{{catalogo.opcion}}</td>
                        <td>
                            <button  class="btn btn-danger btn-sm" @click="eliminar_producto(catalogo.id)">X</button>
                            <button  class="btn btn-primary btn-sm" @click="editar_producto(catalogo)">E</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {addDoc, collection, onSnapshot, deleteDoc, doc, updateDoc} from '@firebase/firestore'
import {uploadBytes, ref, getDownloadURL} from '@firebase/storage'
import {db, storage} from '../utils/firebase.js'
export default {
    name:'CatalogoAdminForm',
    data(){
            return{
                descripcion:'',
                precio:null,
                porcentaje:null,
                categoria:'',
                stock:null,
                opcion:'Seleccionar',
                lista_producto:[],
                id: null,
                estado:0,
                r:'',
                re:'',
                URL: null
            }
        },
        methods:{
            async subir_imagen(){
                const file = document.getElementById("inp_file").files[0]
                const config = ref(storage , 'catalogo_imagenes/' + this.descripcion)
                await uploadBytes(config, file ).then(()=>{
                    alert('Operacion exitosa')
                    document.getElementById("inp_file").vue = ''
                })
                this.URL = await getDownloadURL(config)
            },
            vaciar(){
                this.descripcion = ''
                this.precio = null
                this.porcentaje = null
                this.categoria = ''
                this.stock = null
                this.opcion = 'Seleccionar'
                this.URL = null
            },
            async guardar_producto(){
                await this.subir_imagen()
                const objetoProducto = {
                    descripcion: this.descripcion,
                    precio: this.precio,
                    porcentaje: this.porcentaje,
                    categoria: this.categoria,
                    stock: this.stock,
                    opcion: this.opcion,
                    URL: this.URL
                }
                const coleccion = collection(db,'catalogo')
                addDoc(coleccion,objetoProducto)
                this.vaciar()
            },
            obtener_producto(){
                //Se hace una captura de datos de la coleccion producto
                onSnapshot( collection(db,'catalogo'),(snapshot) => {
                    this.lista_producto = []
                    snapshot.docs.map((doc) =>{
                        this.lista_producto.push({...doc.data(), id:doc.id})
                    })
                })
            },
            eliminar_producto(id){
                var re=confirm("¿Esta seguro que quiere eliminar este producto?")
                if (re==true){
                    alert("Producto eliminado")
                    /* Para eliminar, necesito acceso a la base, especificar la collecion y el ID*/
                    deleteDoc(doc(db, 'catalogo',id))
                }
                else{
                    alert("Tenga mas cuidado la proxima vez")
                }
            },
            editar_producto(catalogo){
                    this.descripcion =catalogo.descripcion;
                    this.precio = catalogo.precio;
                    this.porcentaje = catalogo.porcentaje;
                    this.categoria = catalogo.categoria;
                    this.stock = catalogo.stock;
                    this.opcion = catalogo.opcion;
                    this.URL = catalogo.URL;
                    this.id = catalogo.id;
                    this.estado = 1;
            },
            actualizar_producto(){
                var r=confirm("¿Esta seguro que quiere modificar este producto?");
                if (r==true){
                    alert("Producto modificado")
                    const productoModificado = {
                        descripcion:this.descripcion,
                        precio:this.precio,
                        porcentaje: this.porcentaje,
                        stock:this.stock,
                        opcion: this.opcion,
                        URL:this.URL,
                    }
                    updateDoc(doc(db,'catalogo',this.id), productoModificado)
                    this.estado = 0;
                    this.vaciar()
                }
                else{
                    alert('tenga mas cuidado la proxima vez')
                }
            }
        },
        mounted(){
            this.obtener_producto()
        }

}   
</script>
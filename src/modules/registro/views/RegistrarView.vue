<template>
 <div class="principal">
    <h2>Formulario De Registro</h2>
    <Form  :validation-schema="schema" @submit="onSubmit ">
      <div class="form">
         <label for="nombre">Nombre:</label>
         <Field v-model="nombre" type="text" class="campo" name="nombre" id="nombre" placeholder="ingrese su nombre" />
         <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
         <label for="email">Correo:</label>
         <Field v-model="email" type="email" class="campo" name="email" id="email" placeholder="ingrese su correo" />
         <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form">
         <button type="submit">Registrar</button>
      </div>
    </Form>
 </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import {schema} from '../schemas/validationSchema';
import { useRegistrarStore } from '../stores/registrarStore';
import { ref } from 'vue';

const registrarStore = useRegistrarStore();

const nombre = ref('');
const email = ref('');
const onSubmit = () => {
   registrarStore.guardarRegistro(nombre.value, email.value)
console.log('Se ha enviado el formulario')
}
</script>

<style scoped>
.form{
   margin-bottom: 10px;
}

.campo{
   height: 30px;
   width: 300px;
   margin-left: 20px;
}

.principal{
   margin-left: 10px;
}
</style>
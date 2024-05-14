<template>
    <div class="container">
        <form id="form" ref="form" @submit.prevent="sendEmail">
        
          <label>Nombre </label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            required
            placeholder="Nombre completo"
          >

          <label>Correo</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            required
            placeholder="Correo electrónico"
            >
            
          <label>Mensaje</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Mensaje">
          </textarea>
          
          <input type="submit" value="Enviar" id="button">

        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },

  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_cqdrrri', 'template_omas5yn', 
        this.$refs.form, 'jg4sqoLYU8612ugmw')
        alert('Correo enviado')
      } catch(error) {
          console.log({error})
      }

      
      // Restablecer Formulario
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: red;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: red;
}
</style>
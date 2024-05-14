<template>
<v-main>


<!-- Alerta al cargar la pagina -->
  <v-row
  class="al"
  justify="center">
    <v-alert
    class="alert"
      v-model="alert"
      color="#FF5555"
      dark
      dismissible
    >
    Honda VYM Salamanca informa que cualquier tipo de 
    información recabada en esta página web es usada con 
    el fin de ponerse en contacto con nuestros compradores.
    </v-alert>
    </v-row>
  <br>


    <!-- Publicidad principal -->
    <center>
    <v-img class="Estilo_Principal"
    src='../assets/Principal/pub_principal.jpg'>
    </v-img>
    </center>


<!-- Publicidades (3) -->
  <v-container
  class="con"
  >
  <center>
    <img 
    class="img1"
    src="../assets/Principal/publicidad_1.jpg">
    <img 
    class="img1"
    src="../assets/Principal/publicidad_2.jpg">
    <img 
    class="img1"
    src="../assets/Principal/publicidad_3.jpg">
    </center>
  </v-container>

  

 <!-- Mapa NO TOCAR DE PREFERENCIA -->
  <v-container class="mapa">
    <p class="p1">
    <b>Donde ubicarnos</b> </p>
    
  <GoogleMap :latitude= 20.566872736311453 :longitude= -101.18839365278306 :title="'Titulo Marcador'" />
  <a 
  style="text-decoration: none; color: inherit;"
  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D20.566372%252C-101.1885%26fbclid%3DIwAR3_b4Ez3H9WPzAm6MPBcYPTKpGdPyR1fjfqym5wj2dcYwqTgMsZvLh7qck&h=AT010bvE7z9BB_tGVvBafGVZF27-qoPMQZTwLy6kzRsTlS3c7xe3bfr8GRDn1FRnYyGUniDfsEppVxUQLl1vLp7uJebc-BU44T7E2YG0Wtg5XjezOKd1IVz3M4IvrXynNC4dqKzlnlHfM7KAhTbNFw"> <p class="p2"> <b>Boulevard Hidalgo #1119 36750 <br> 
  Salamanca, México</b> </p>
  </a>
  </v-container>
</v-main>
</template>


<!-- Importación de mapa -->
<script>
import GoogleMap from "../components/GoogleMap.vue";
export default {
  name: 'App',
  components: {
    GoogleMap
  }, 
  data () {
    return {
      alert : true,
    }
  }
}
</script>


<!-- Estilos (Css)  -->
<style scoped>


/* Estilo publicidad principal */
.Estilo_Principal{
  width: 85%;
}


/* Estilo publicidades pequeñas */
.img1{
    width: 28%;
    border-radius: 5%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    margin-right: 20px;
}


/* Estilo texto "Donde ubicarnos" */
.p1{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 40px;
    text-shadow: 5px 5px 5px rgba(133, 133, 133, 0.486);
}


/* Estilo URL mapa */
.p2{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 17px;
    text-shadow: 5px 5px 5px rgba(133, 133, 133, 0.486);
}


/* Estilo mapa */
.mapa{
  margin-left: auto;
  margin-right: auto;
  width: 85%;
}


/* Estilo alerta al iniciar el sitio web */
.alert{
  position: absolute;
  width: 350px;
  text-align: center;
  z-index: 1;
  justify-content: center;
  position: fixed;
}

</style>
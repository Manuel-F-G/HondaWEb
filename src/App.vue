<template>
  <v-app>

<!-- Logo superior  -->
    <v-container>
      <a href="../">
      <v-img 
      class="img1"
      src='../src/assets/Honda.jpg'>
      </v-img>
      </a>
      </v-container>

<!-- Menú  -->
    <v-tabs
      class="menu"
      dark
      background-color="#696969"
      grow
    >
      <v-tab>
          <router-link style="text-decoration: none; color: inherit;"
          to="../components/Cascos.vue">
          Cascos
          </router-link>
      </v-tab>

      <v-tab>
          <router-link style="text-decoration: none; color: inherit;"
          to="../components/Cajas.vue">
          Cajas
          </router-link>
      </v-tab>

      <v-tab>
        <router-link style="text-decoration: none; color: inherit;"
        to="../components/Ropa.vue">
        Ropa
        </router-link>
      </v-tab>

      <v-tab>
        <router-link style="text-decoration: none; color: inherit;"
        to="../components/Llantas.vue">
        Llantas
        </router-link>
      </v-tab>

      <v-tab>
        <router-link style="text-decoration: none; color: inherit;"
        to="../components/Varios.vue">
        Varios
        </router-link>
      </v-tab>
    </v-tabs>


    <v-main>
      <router-view/>
    </v-main>


<!-- FOOTER  -->
    <v-footer class="footer-1"
    dark
    padless>


<!-- Posicionamiento del texto e iconos -->
    <v-card
      flat
      tile
      class="grey darken-2 white--text text-center"
      width="100%">
      

<!-- Icono, texto y redireccionamiento hacia la pag Facebook  -->
      <v-card-text>
        <a 
        style="text-decoration: none; color: inherit;"
        href="https://www.facebook.com/hondasalamanca">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
        
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
           hondasalamanca
        </v-btn> <br>
        </a>


<!-- Icono, texto y redireccionamiento hacia el formulario  -->
        <a 
        style="text-decoration: none; color: inherit;"
        href="../components/Formulario.vue">
        <v-btn
          v-for="icon in icone"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
        
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
          hondamotossalamanca@hotmail.com
        </v-btn> <br>
        </a>


<!-- Icono, texto y redireccionamiento hacia Whatsapp  -->
        <a 
        style="text-decoration: none; color: inherit;"
        href="https://wa.me/524646415727?text=Hola%20necesito%20información%20sobre%20un%20artículo">
        <v-btn
          v-for="icon in icon"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
        
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
          464 641 5727
        </v-btn>
        </a>
      </v-card-text>

      <v-divider></v-divider>


<!-- Texto de Honda  -->
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Honda VYM Salamanca</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>


<script>


/* Importación iconos */
export default {
  name: 'App',

  data: () => ({
    icons: [
        'mdi-facebook',
      ],
      icone: [
        'mdi-email',
      ],
      icon: [
        'mdi-whatsapp'
      ]
  }),
};
</script>

<style scoped>


/* Estilo del logo */
.img1{
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  margin-top: 0%;
}


/* Estilo Footer */
.footer-1{
  font-family: Arial, Helvetica, sans-serif;
}


/* Estilo menú superior */
.menu{
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 0%;
  width: auto;
}

footer{
  margin-top: 10px;
}

</style>
<template>
<v-main>
  <v-row
  justify="center">


<!-- CARD 1 -->
  <v-col class="shrink">
  <v-card
  class="mx-auto"
    max-width="344">
    <center>
  <!-- Imagen-->
    <v-img
    class="img"
      src="../assets/Cascos/kov.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>
  <!-- Titulo-->
    <v-card-title>
      Cross dirt
    </v-card-title>
  <!-- Subtitulo-->
    <v-card-subtitle>
      $1299
    </v-card-subtitle>
  <!-- Texto para mostrar información-->
    <v-card-actions>
      <v-btn
        color=red 
        text
        @click="show = !show"
      >
        Más información
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

  <!-- Información del articulo-->
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Tallas disponibles: <br>
          S (chico) <br> 
          M (mediano) <br>
          L (grande) <br>
          XL (extra grande)
        </v-card-text>
        <center>
        <v-btn color="red
        " href="../components/Formulario.vue">
          Contacto
        </v-btn>
        </center>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>


<!-- CARD 2 -->
  <v-col class="shrink">
  <v-card
  class="mx-auto"
    max-width="344">
    <center>
    <v-img
    class="img"
      src="../assets/Cascos/kov2.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>

    <v-card-title>
      Estelar
    </v-card-title>

    <v-card-subtitle>
      $1300
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color=red
        text
        @click="show1 = !show1"
      >
        Más información
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show1 = !show1"
      >
        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show1">
        <v-divider></v-divider>

        <v-card-text>
          Tallas disponibles: <br>
          S (chico) <br> 
          M (mediano) <br>
          L (grande) <br>
          XL (extra grande)
        </v-card-text>
        <center>
        <v-btn color="red" href="../components/Formulario.vue">
          Contacto
        </v-btn>
        </center>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>


<!-- CARD 3 -->
  <v-col class="shrink">
  <v-card
  class="mx-auto"
    max-width="344">
    <center>
    <v-img
    class="img"
      src="../assets/Cascos/kov3.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>

    <v-card-title>
      KOV Aircut
    </v-card-title>

    <v-card-subtitle>
      $1400
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color=red
        text
        @click="show2 = !show2"
      >
        Más información
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show2 = !show2"
      >
        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show2">
        <v-divider></v-divider>

        <v-card-text>
          Tallas disponibles: <br>
          S (chico) <br> 
          M (mediano) <br>
          L (grande) <br>
          XL (extra grande)
        </v-card-text>
        <center>
        <v-btn color="red" href="../components/Formulario.vue">
          Contacto
        </v-btn>
        </center>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>


<!-- CARD 4 -->
  <v-col class="shrink">
  <v-card
  class="mx-auto"
    max-width="344">
    <center>
    <v-img
    class="img"
      src="../assets/Cascos/roda1.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>

    <v-card-title>
      Roda Course
    </v-card-title>

    <v-card-subtitle>
      $1099
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color=red
        text
        @click="show3 = !show3"
      >
        Más información
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show3 = !show3"
      >
        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show3">
        <v-divider></v-divider>

        <v-card-text> 
          Tallas disponibles: <br>
          S (chico) <br> 
          M (mediano) <br>
          L (grande) <br>
          XL (extra grande)
        </v-card-text>
        <center>
        <v-btn color="red" href="../components/Formulario.vue">
          Contacto
        </v-btn>
        </center>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>


<!-- CARD 5 -->
  <v-col class="shrink">
  <v-card
  class="mx-auto"
    max-width="344">
    <center>
    <v-img
      class="img"
      src="../assets/Cascos/roda2.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>

    <v-card-title>
      Roda Rush
    </v-card-title>

    <v-card-subtitle>
      $1150
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color=red
        text
        @click="show4 = !show4"
      >
        Más información
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show4 = !show4"
      >
        <v-icon>{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show4">
        <v-divider></v-divider>

        <v-card-text>
          Tallas disponibles: <br>
          S (chico) <br> 
          M (mediano) <br>
          L (grande) <br>
          XL (extra grande)
        </v-card-text>
        <center>
        <v-btn color="red" href="../components/Formulario.vue">
          Contacto
        </v-btn>
        </center>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>


<!-- CARD 6 -->
  <v-col class="shrink">
  <v-card
  class="mx-auto"
    max-width="344">
    <center>
    <v-img
    class="img"
      src="../assets/Cascos/roda3.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>

    <v-card-title>
      Roda Rush Amarillo
    </v-card-title>

    <v-card-subtitle>
      $1199
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color=red

        text
        @click="show5 = !show5"
      >
        Más información
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show5 = !show5"
      >
        <v-icon>{{ show5 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show5">
        <v-divider></v-divider>

        <v-card-text>
          Tallas disponibles: <br>
          S (chico) <br> 
          M (mediano) <br>
          L (grande) <br>
          XL (extra grande)
        </v-card-text>
        <center>
        <v-btn color="red" href="../components/Formulario.vue">
          Contacto
        </v-btn>
        </center>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>


  </v-row>
  </v-main>
</template>

<script>
  export default {
    data: () => ({
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
    }),
  }
</script>

<style scoped>

.img{
  width: 60%;
}

</style>
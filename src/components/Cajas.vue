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
      src="../assets/Cajas/caja1.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>
  <!-- Titulo-->
    <v-card-title>
      Caja fibra de vidrio
    </v-card-title>
  <!-- Subtitulo-->
    <v-card-subtitle>
      $750
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
          Caja para motocicleta tipo cargo, hecha con cerradura para el aseguramiento del contenido en base a un candado.
        </v-card-text>
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
      src="../assets/Cajas/caja2.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>

    <v-card-title>
      Caja de plastico
    </v-card-title>

    <v-card-subtitle>
      $985
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
          Caja para motocicleta tipo cargo/motoneta, diseñada para una facil instalación y compartimento amplio.
        </v-card-text>
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
      src="../assets/Cajas/caja3.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>

    <v-card-title>
      Caja con reflejante
    </v-card-title>

    <v-card-subtitle>
      $999
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
          Caja para motocicleta tipo cargo/motoneta, diseñada para una facil instalación y compartimento amplio, con dos llaves adicionales.
        </v-card-text>
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
      src="../assets/Cajas/caja4.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>

    <v-card-title>
      Caja para motoneta
    </v-card-title>

    <v-card-subtitle>
      $875
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
          Caja adaptable para motocicleta de varios tipos, que centa con un diseño ergonómico y facil instalación.
        </v-card-text>
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
      src="../assets/Cajas/caja5.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>

    <v-card-title>
      Caja de uso rudo
    </v-card-title>

    <v-card-subtitle>
      $1500
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
          Caja adaptable para motocicleta de varios tipos, hecha específicamente con el fin de viajes largos, incluido un respaldo para el pasajero.
        </v-card-text>
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
      src="../assets/Cajas/caja6.jpg"
      height="300px"
      width="300px"
    ></v-img>
    </center>

    <v-card-title>
      Caja contra agua
    </v-card-title>

    <v-card-subtitle>
      $1129
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
          Caja adaptable para motocicleta de varios tipos, repelente al agua, cuenta con un sistema de filtrado exclusivo de la marca shad.
        </v-card-text>
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
  width: 70%;
}

</style>
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from "vue2-google-maps";
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k",
        libraries: "", // necessary for places input
    },
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
import Vue from 'vue';
import VueRouter from 'vue-router';


// ensino o vue a entender as dependencias
// e ter o VueRouter como dependencias
// para que adicione comportamentos no vue que
// pode podemos usar dentro dos nossos demais componetes.
Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Videos from '../pages/Home.vue';
import Sobre from '../pages/Sobre.vue';
import Contato from '../pages/Contato.vue';



// guarda as rotas
const routes = [
    // cada posição é um objeto
    {
      path: '/',
      component: Home
    },

    {
       path: '/videos',
       component: Videos
    },

    {
        path: '/sobre',
        component: Sobre
     },

     {
        path: '/contato',
        component: Contato
     }
];

// nova instancia do VueRouter
const router = new VueRouter({
    routes,
    // Esse mode history faz com que o VueRouter
    // processe as rotas, exatamente: /home, /videos, /sobre, /contatos 
    mode: 'history'
});

export default router;
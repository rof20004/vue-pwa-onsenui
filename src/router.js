import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login'
import Index from './components/Index'
import CadastroPage from './components/CadastroPage'
import CompraPage from './components/CompraPage'
import CompraRealizadaPage from './components/CompraRealizadaPage'

Vue.use(Router);

const router = new Router({
  routes: [
		{ path: '/login', name: 'Login', component: Login },
		{ 
			path: '/', 
			name: 'Index', 
			component: Index,
			children: [
				{ path: '/cadastro', name: 'Cadasro', component: CadastroPage },
				{ path: '/compra', name: 'Compra', component: CompraPage, children: [{ path: '/compraRealizada', name: 'CompraRealizada', component: CompraRealizadaPage }] }
			]
		},
		{ path: '*', redirect: '/login' }
  ]
});

router.beforeEach((to, from, next) => {
	const token = window.localStorage.getItem('meutrabalho-token')
	if (token && to.path === '/login') {
		next('/')
	} else if (!token && to.path !== '/login') {
		next('/login')
	} else {
		next()
	}
})

/* For Vuex
 *
 * import store from 'store.js';
 *
 * router.beforeEach((to, from, next) => {
 *   // Reset pageStack to the new route
 *   store.commit('navigator/resetStack', to.matched.map(m => m.components.default));
 *   next();
 * });
 */

export default router;

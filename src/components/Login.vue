<template>
	<v-ons-page id="login">
		<h1>LOGIN</h1>
		<form @submit.stop.prevent="login">
			<input type="text" v-model="username" placeholder="Username" autocomplete="off">
			<input type="password" v-model="password" placeholder="Password">
			<button type="submit">Enter</button>
		</form>
  </v-ons-page>
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		login () {
			if (this.username === 'admin' && this.password === 'admin') {
				window.localStorage.setItem('meutrabalho-token', 'logado')
				this.$router.replace('/')
			} else {
				alert('Dados de login inválidos!')
			}
		}
	}
}
</script>


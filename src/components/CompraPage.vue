<template>
	<v-ons-page>
    <v-ons-toolbar class="compra-toolbar">
      <div class="left">
        <v-ons-back-button>Home</v-ons-back-button>
      </div>
      <div class="center">Compra</div>
    </v-ons-toolbar>

    <div class="header">
      <h1>Bem Vindo a página de Compra</h1>
			<v-ons-button @click="$router.push('/compraRealizada')">Ver compras</v-ons-button>
    </div>
  </v-ons-page>
</template>

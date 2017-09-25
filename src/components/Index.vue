<template>
	<v-ons-page id="app">
		<v-ons-splitter>
			<v-ons-splitter-side swipeable collapse width="250px" :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'" :open.sync="menuIsOpen">
				<menu-page @toggleMenu="menuIsOpen = !menuIsOpen"></menu-page>
			</v-ons-splitter-side>

			<v-ons-splitter-content>
				<home-page @toggleMenu="menuIsOpen = !menuIsOpen"></home-page>
			</v-ons-splitter-content>
		</v-ons-splitter>
	</v-ons-page>
</template>

<script>
import HomePage from './HomePage'
import MenuPage from './MenuPage'

export default {
  name: 'app',
  data() {
    return {
      menuIsOpen: false
    }
  },
  components: {
    HomePage,
    MenuPage
  }
}
</script>

<style>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
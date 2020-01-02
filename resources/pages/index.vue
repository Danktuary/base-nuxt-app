<template>
	<v-layout column justify-center align-center>
		<v-flex xs12 sm8 md6>
			<div class="text-center">
				<logo />
			</div>
			<v-card>
				<v-card-title class="headline">
					Welcome to the Vuetify + Nuxt.js template
				</v-card-title>
				<v-card-text>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eaque corrupti quos culpa quas possimus? Officia, quod voluptas? Enim ut laborum commodi quod quam temporibus, numquam perspiciatis at odit voluptas.
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
	components: {
		Logo,
	},
}
</script>

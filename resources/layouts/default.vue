<template>
	<v-app dark>
		<v-navigation-drawer v-model="navOpen" temporary :fixed="true" app>
			<v-list>
				<v-list-item :to="{ name: 'index' }" exact>
					<v-list-item-action>
						<v-icon>mdi-apps</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar fixed app>
			<v-app-bar-nav-icon @click.stop="navOpen = !navOpen" />
			<v-toolbar-title>Nuxt App</v-toolbar-title>
			<v-spacer />
		</v-app-bar>
		<v-content>
			<v-container>
				<nuxt />
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		navOpen: false,
	}),
}
</script>

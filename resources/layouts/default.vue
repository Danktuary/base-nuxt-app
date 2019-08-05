<template>
	<Layout class="layout">
		<Header class="header">
			<Menu mode="horizontal" theme="dark" active-name="1">
				<div class="layout-nav">
					<MenuItem name="1">
						<Icon type="ios-navigate" />
						Item 1
					</MenuItem>
					<MenuItem name="2">
						<Icon type="ios-keypad" />
						Item 2
					</MenuItem>
					<MenuItem name="3">
						<Icon type="ios-analytics" />
						Item 3
					</MenuItem>
					<MenuItem name="4">
						<Icon type="ios-paper" />
						Item 4
					</MenuItem>
				</div>
			</Menu>
		</Header>
		<Content>
			<Breadcrumb class="breadcrumbs">
				<BreadcrumbItem>
					<nuxt-link :to="{ name: 'index' }">
						Home
					</nuxt-link>
				</BreadcrumbItem>
			</Breadcrumb>
			<Card>
				<main id="main-content">
					<Nuxt />
				</main>
			</Card>
		</Content>
	</Layout>
</template>

<style scoped>
.page-enter-active, .page-leave-active {
	position: relative;
	left: 0;
	top: 0;
	transition: all 0.25s ease-in-out;
}

.page-enter {
	left: 1em;
	opacity: 0;
}

.page-leave-to {
	left: -1em;
	opacity: 0;
}

.layout {
	background-color: #f5f7f9;
	position: relative;
}

.layout .header {
	padding: 0 2rem;
}

.layout .breadcrumbs {
	margin: 1rem 2rem;
}
</style>

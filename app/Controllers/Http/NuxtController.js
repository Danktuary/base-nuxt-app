class NuxtController {
	constructor() {
		this.nuxt = use('Service/Nuxt')
	}

	async render({ request: { request: req }, response: { response: res } }) {
		return new Promise((resolve, reject) => {
			return this.nuxt.render(req, res, promise => {
				return promise.then(resolve).catch(reject)
			})
		})
	}
}

module.exports = new NuxtController()

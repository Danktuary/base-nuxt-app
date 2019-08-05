/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class UserSeeder {
	async run() {
		await Factory.model('App/Models/User').create({
			username: 'Admin',
			email: 'admin@site.com',
			password: 'admin',
		})

		await Factory.model('App/Models/User').create({
			username: 'Demo',
			email: 'demo@site.com',
			password: 'demo',
		})
	}
}

module.exports = UserSeeder

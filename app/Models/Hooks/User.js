const Hash = use('Hash')

const UserHook = {}

/**
 * Hash using password as a hook.
 *
 * @method hashPassword
 * @param {Object} userInstance The User model instance
 * @return {void}
 */
UserHook.hashPassword = async userInstance => {
	if (userInstance.password) {
		userInstance.password = await Hash.make(userInstance.password)
	}
}

module.exports = UserHook

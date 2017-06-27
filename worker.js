const firebase = require('firebase-tools')

process.on('message', (params) => {
	firebase.deploy({
		token: params.token,
		project: params.project
	}).then((res) => {
		process.send('done')
		process.exit()
	}).catch((err) => {
		process.send(err)
		process.exit()
	})
})

const { fork } = require('child_process')

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless
    this.options = options

    this.commands = {
      welcome: {
        usage: 'Helps you start your first Serverless plugin',
        lifecycleEvents: [
          'serverless'
        ],
        options: {
          message: {
            usage:
              'Specify the message you want to deploy '
              + '(e.g. "--message \'My Message\'" or "-m \'My Message\'")',
            required: true,
            shortcut: 'm',
          },
        },
      },
    }

    this.hooks = {
      'deploy:compileEvents': this.run.bind(this)
    }
  }

  run() {
    const params = this.serverless.service.custom.firebase
    this.serverless.cli.log(`Deploying firebase rules to ${params.project}`)
    const worker = fork(`${__dirname}/worker.js`)
    worker.send(params)

    worker.on('message', (msg) => {
      this.serverless.cli.log(`Successfully deployed firebase rules to ${params.project}`)
    })
  }
}

module.exports = ServerlessPlugin

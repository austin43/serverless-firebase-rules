class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless
    this.options = options

    console.log(this.serverless)

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
      'before:deploy': this.beforeDeploy.bind(this)
    }
  }

  beforeDeploy() {
    this.serverless.cli.log('Hello from Serverless!')
  }

  // welcomeUser() {
  //   this.serverless.cli.log('Your message:')
  // }
  //
  // displayHelloMessage() {
  //   this.serverless.cli.log(`${this.options.message}`)
  // }
  //
  // afterHelloWorld() {
  //   this.serverless.cli.log('Please come again!')
  // }
}

module.exports = ServerlessPlugin

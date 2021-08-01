import fs from 'fs-extra'

import {
  EngineResult,
  InteractiveHook,
  RunnerArgs,
  RunnerConfig,
} from './types'
import params from './params'
import loadHookModule from './hookmodule'

class ShowHelpError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, ShowHelpError.prototype)
  }
}

const engine = async (
  runnerArgs: RunnerArgs,
  config: RunnerConfig,
): Promise<EngineResult> => {
  const { cwd, templates, logger } = config
  const hookModule = loadHookModule(config, runnerArgs)
  const args = Object.assign(await params(config, runnerArgs, hookModule), {
    cwd,
  })
  const { generator, action, actionfolder } = args

  if (args.h || args.help) {
    logger.log(`
Usage:
  hygen [option] GENERATOR ACTION [--name NAME] [data-options]

Options:
  -h, --help # Show this message and quit
  --dry      # Perform a dry run.  Files will be generated but not saved.`)
    process.exit(0)
  }

  logger.log(args.dry ? '(dry mode)' : '')

  if (!generator) {
    throw new ShowHelpError('please specify a generator.')
  }

  if (!action) {
    throw new ShowHelpError(`please specify an action for ${generator}.`)
  }

  if (config.debug) {
    logger.log(`Loaded templates: ${templates.replace(`${cwd}/`, '')}`)
  }

  if (!(await fs.exists(actionfolder))) {
    throw new ShowHelpError(`I can't find action '${action}' for generator '${generator}'.
      You can try:
      1. 'hygen init self' to initialize your project, and
      2. 'hygen generator new --name ${generator}' to build the generator you wanted.
      Check out the quickstart for more: http://www.hygen.io/quick-start
    `)
  }

  // lazy loading these dependencies gives a better feel once
  // a user is exploring hygen (not specifying what to execute)
  const execute = require('./execute').default
  const render = require('./render').default
  const actions = await execute(await render(args, config), args, config)
  const result: EngineResult = { args, actions, hookModule }
  const interactiveHook = hookModule as InteractiveHook

  if (interactiveHook && interactiveHook.rendered) {
    await interactiveHook.rendered(result, config)
  }

  return result
}

export { ShowHelpError }
export default engine

import fs from 'fs-extra'

import { ActionResult, RunnerArgs, RunnerConfig } from './types'
import params from './params'

class ShowHelpError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, ShowHelpError.prototype)
  }
}

const engine = async (
  runnerArgs: RunnerArgs,
  config: RunnerConfig,
): Promise<ActionResult[]> => {
  const { cwd, templates, logger } = config
  const args = Object.assign(await params(config, runnerArgs), { cwd })
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

  Try installing @feathersjs/${generator} or feathers-${generator} 
    `)
  }

  // lazy loading these dependencies gives a better feel once
  // a user is exploring hygen (not specifying what to execute)
  const execute = require('./execute').default
  const render = require('./render').default
  return execute(await render(args, config), args, config)
}

export { ShowHelpError }
export default engine

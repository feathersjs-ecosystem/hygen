import path from 'path'
import { RunnerConfig, ParamsResult, RunnerArgs } from './types'
import prompt from './prompt'

const params = async (
  config: RunnerConfig,
  runnerArgs: RunnerArgs,
): Promise<ParamsResult> => {
  const { generator, action, name, mainAction, subaction } = runnerArgs
  const { templates } = config

  if (!generator || !action) {
    return { generator, action, templates }
  }

  const actionfolder = path.join(templates, generator, mainAction)
  const baseArgs = {
    templates,
    actionfolder,
    generator,
    action,
    subaction,
    ...runnerArgs.args,
    ...(name && { name }),
  }
  const promptArgs = await prompt(config, runnerArgs)

  return {
    ...baseArgs,
    ...promptArgs,
  }
}

export default params

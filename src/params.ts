import path from 'path'
import { RunnerConfig, ParamsResult, RunnerArgs, HookModule } from './types'
import prompt from './prompt'

const params = async (
  config: RunnerConfig,
  runnerArgs: RunnerArgs,
  hookModule: HookModule = null,
): Promise<ParamsResult> => {
  const { generator, action, name, subaction } = runnerArgs
  const { templates } = config

  if (!generator || !action) {
    return { generator, action, templates }
  }

  const actionfolder = path.join(templates, generator, action)
  const baseArgs = {
    templates,
    actionfolder,
    generator,
    action,
    subaction,
    ...runnerArgs.args,
    ...(name && { name }),
  }
  const promptArgs = await prompt(config, runnerArgs, hookModule)

  return {
    ...baseArgs,
    ...promptArgs,
  }
}

export default params

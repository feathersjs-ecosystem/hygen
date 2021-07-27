import {
  Arguments,
  InteractiveHook,
  RunnerConfig,
  PromptList,
  RunnerArgs,
} from './types'

const prompt = (
  config: RunnerConfig,
  runnerArgs: RunnerArgs,
): Promise<Arguments> => {
  const { args } = runnerArgs
  const hookModule = config.loadHookModule
    ? config.loadHookModule(config.templates, runnerArgs)
    : null

  if (!hookModule) {
    return Promise.resolve({})
  }

  const { createPrompter } = config
  const hooksModule = hookModule as InteractiveHook

  if (hooksModule.params) {
    return hooksModule.params({ args, config })
  }

  // lazy loads prompter
  // everything below requires it
  const prompter = createPrompter()
  if (hooksModule.prompt) {
    return hooksModule.prompt({ prompter, inquirer: prompter, args, config })
  }

  return prompter.prompt(
    // prompt _only_ for things we've not seen on the CLI
    (hookModule as PromptList).filter(
      (p) =>
        args[p.name] === undefined ||
        args[p.name] === null ||
        args[p.name].length === 0,
    ),
  )
}

export default prompt

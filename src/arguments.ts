import yargs from 'yargs-parser'
import { RunnerArgs } from './types'

export const getRunnerArgs = (argv: RunnerArgs | string[]): RunnerArgs => {
  if (Array.isArray(argv)) {
    const parsed = yargs(argv)
    const [generator, action, name] = parsed._
    const { _, ...args } = parsed
    const [mainAction, subaction] = action.split(':')

    return {
      generator,
      action,
      mainAction,
      subaction,
      name,
      args,
    }
  }

  const [mainAction, subaction] = argv.action.split(':')

  return {
    mainAction,
    subaction,
    ...argv,
  }
}

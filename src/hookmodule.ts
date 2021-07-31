import fs from 'fs'
import path from 'path'
import { RunnerArgs, HookModule, RunnerConfig } from './types'

export default (
  config: RunnerConfig,
  args: RunnerArgs,
  hooksfiles = ['prompt.js', 'index.js'],
): HookModule => {
  const { generator, mainAction } = args
  const { templates } = config
  const actionfolder = path.join(templates, generator, mainAction)
  const hooksfile = hooksfiles
    .map((f) => path.resolve(path.join(actionfolder, f)))
    .find((f) => fs.existsSync(f))

  if (!hooksfile) {
    return null
  }

  return require(hooksfile)
}

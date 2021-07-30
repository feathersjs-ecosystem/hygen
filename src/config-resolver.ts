import path from 'path'
import fs from 'fs-extra'
import { RunnerConfig, HookModule, RunnerArgs } from './types'
import { ConfigResolver } from './config'

const configResolver = new ConfigResolver('.hygen.js', {
  exists: fs.exists,
  load: (f) => Promise.resolve(require(f)),
  none: (_) => ({}),
})

export const loadHookModule = (
  templates: string,
  args: RunnerArgs,
  hooksfiles = ['prompt.js', 'index.js'],
): HookModule => {
  const { generator, mainAction } = args
  const actionfolder = path.join(templates, generator, mainAction)
  const hooksfile = hooksfiles
    .map((f) => path.resolve(path.join(actionfolder, f)))
    .find((f) => fs.existsSync(f))

  if (!hooksfile) {
    return null
  }

  return require(hooksfile)
}

export default async (config: RunnerConfig): Promise<RunnerConfig> => {
  const { cwd, templates } = config

  const resolvedTemplates =
    [process.env.HYGEN_TMPLS, path.join(cwd, '_templates')].find(
      _ => _ && fs.existsSync(_),
    ) || templates

  return {
    ...config,
    loadHookModule,
    templates: resolvedTemplates,
    ...(await configResolver.resolve(cwd)),
  }
}

export interface Logger {
  ok: (msg: string) => void
  notice: (msg: string) => void
  warn: (msg: string) => void
  err: (msg: string) => void
  log: (msg: string) => void
  colorful: (msg: string) => void
}
export interface Prompter<Q, T> {
  prompt: (arg0: Q) => Promise<T>
}
export interface RenderedAction {
  file?: string
  attributes: any
  body: string
}

export type Arguments = Record<string, any>

export type RunnerArgs = {
  generator: string
  action: string
  args: Arguments
  subaction?: string
  name?: string
}

export interface RunnerConfig {
  exec?: (sh: string, body: string) => void
  templates?: string
  cwd?: string
  logger?: Logger
  debug?: boolean
  helpers?: any
  localsDefaults?: any
  createPrompter?: <Q, T>() => Prompter<Q, T>
}

export interface ResolverIO {
  exists: (arg0: string) => Promise<boolean>
  load: (arg0: string) => Promise<Record<string, any>>
  none: (arg0: string) => Record<string, any>
}

export type ActionResult = any

export type ParamsResult = {
  templates: string
  generator: string
  action: string
  subaction?: string
  actionfolder?: string
  name?: string
  dry?: boolean
} & Arguments

export type PromptList = any[]

export interface InteractiveHook {
  params?(args: Arguments): Promise<Arguments>
  prompt?<Q, T>(promptArgs: {
    prompter: Prompter<Q, T>
    inquirer: Prompter<Q, T>
    args: Arguments
    config: RunnerConfig
  }): Promise<Arguments>
  // eslint-disable-next-line
  rendered?(result: EngineResult, config: RunnerConfig): Promise<EngineResult>
}

export type HookModule = PromptList | InteractiveHook | null

export interface EngineResult {
  actions: ActionResult[]
  args: ParamsResult
  hookModule: HookModule
}

export interface RunnerResult {
  success: boolean
  time: number
  actions: ActionResult[]
  failure?: {
    message: string
    availableActions: string[]
  }
}

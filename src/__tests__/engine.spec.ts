import path from 'path'
import Logger from '../logger'
import { engine } from '../index'

jest.mock('enquirer', () => ({
  prompt: null,
}))

const enquirer = require('enquirer')

const logger = new Logger(console.log)

const createConfig = (metaDir) => ({
  templates: path.join(metaDir, 'fixtures'),
  cwd: metaDir,
  exec: (action, body) => {
    const execOpts = body && body.length > 0 ? { input: body } : {}
    return require('execa').command(action, { ...execOpts, shell: true })
  },
  logger,
  createPrompter: () => require('enquirer'),
})
const failPrompt = () => {
  throw new Error('set up prompt in testing')
}

describe('engine embedding', () => {
  beforeEach(() => {
    enquirer.prompt = failPrompt
  })

  it('renders with runner arguments and runs hook module', async () => {
    const promptResult = {
      email: 'hello@test.com',
    }
    enquirer.prompt = () => Promise.resolve(promptResult)

    const config = createConfig(__dirname)

    const result = await engine(
      {
        generator: 'hookmodule',
        action: 'new',
        args: {
          name: 'Dave',
          greeting: 'Hi',
        },
      },
      config,
    )

    expect(result.actions.length).toBe(0)
    expect(result.args.email).toBe(promptResult.email)
    expect(result.args.name).toBe('Dave')
    expect(result.hookModule).toBeDefined()
  })
})

const assert = require('assert')

module.exports = {
  prompt: ({ prompter, config }) => {
    assert.ok(config)

    return prompter.prompt()
  },
  rendered: (result, config) => {
    assert.ok(result.actions)
    assert.ok(config.templates)
  },
}

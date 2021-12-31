export function render(context: any) {
  const to = `given/hygen-js/new.md`
  const body = `
this demonstrates hygen loaded up .hygen.js and extended helpers.
${context.h.extended('hello')}
`

  return {
    body,
    to,
  }
}

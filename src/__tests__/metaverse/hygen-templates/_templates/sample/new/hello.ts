export function render(context: any) {
  const to = `given/my_app/template.md`
  const body = `
hello metaverse!
This is your first hygen template.

Learn what it can do here:

https://github.com/jondot/hygen    
  `

  return {
    body,
    to,
  }
}

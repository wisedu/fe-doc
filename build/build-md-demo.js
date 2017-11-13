const fs = require('fs')
const path = require('path')
const args = process.argv.splice(2);

const src = 'src/markdown/mobile'
fs.readdirSync(src).forEach(md => {
  const filePath = src + '/' + md
  let content = fs.readFileSync(filePath, 'utf-8')

  if (args[0] === 'reset') {
    content = content.replace(/::: demo\n/g, '').replace(/\n:::/g, '').replace(/<\!-- demo start -->[^@]+<\!-- demo end -->/g, '')
  } else {
    if (!/::: demo/.test(content)) {
      content = content.replace(/```html[^`]+```/g, val => '::: demo\n' + val + '\n:::')
      // content = content.replace(/```javascript[^`]+```/g, val => {
      //   if (val.indexOf('import') > -1) return ''
      //   const text = val.replace(/^```javascript\n|```$/g, '')
      //   return val + '\n<!-- demo start -->\n<script>\n' + text + '</script>\n<!-- demo end -->\n'
      // })
    }
  }
  fs.writeFileSync(filePath, content)

})
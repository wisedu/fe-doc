const fs = require('fs')
const path = require('path')

const src = 'src/markdown/mobile'
fs.readdirSync(src).forEach(md => {
  const filePath = src + '/' + md
  let content = fs.readFileSync(filePath, 'utf-8')
  if (!/::: demo/.test(content)) {
    content = content.replace(/```html[^`]+```/g, val => '::: demo\n' + val + '\n:::')
    fs.writeFileSync(filePath, content)
  }
})
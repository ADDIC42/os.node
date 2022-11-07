import os from 'os'
import name from './welcome.js'
console.log(`
${os.homedir()} 
${os.hostname()}
${os.version()}
${os.type()}`)
console.log(name())

import os from 'os'
function name() {
    return (`Привет, юзер. Вижу ты зашел с ${os.type()}`)
}
export default name
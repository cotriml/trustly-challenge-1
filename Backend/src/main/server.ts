import 'module-alias/register'
import app from '@/main/config/app'
import env from '@/main/config/env'

console.log('Connecting application...')
app.listen(env.port, () => {
  console.log(`Application listening to Port: ${env.port}`)
})

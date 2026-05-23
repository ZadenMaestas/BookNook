import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

app.use('/*', serveStatic({ root: './public' }))

app.use(renderer)

/* Api calls here */
app.get('/', (ctx) => {
  return ctx.render(<h1>Hello!</h1>)
})

app.get('')

export default app

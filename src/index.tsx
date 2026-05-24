import {Context, Hono} from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

/* Api calls here */
app.get('/api/register', (ctx) => {
  return ctx.json({ api: 'working' })
})

export default app

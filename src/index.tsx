import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

/* Api calls here */
app.get('/api/register', (ctx) => {
  return {"api": "working"}
})

export default app

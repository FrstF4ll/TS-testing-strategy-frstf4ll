import { Elysia } from 'elysia'
import { node } from '@elysia/node'

export const app = new Elysia({ adapter: node() })
    .get('/health', () => 'ok')
    .listen(3000)


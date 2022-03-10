import { fastify } from './lib/fastify'




// Start the server
// fastify.listen(process.env.PORT ?? 3000).catch(console.error)
const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()

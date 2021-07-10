import { app } from './app'

const PORT = 3000

/**
 * Start the server
 */
const server = app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))

process.on('SIGINT', () => {
    server.close()
    console.log('Server closed!')
})
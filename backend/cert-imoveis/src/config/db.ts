import { createConnection } from 'typeorm'

/**
 * Create the connection with the database
 */

export const connectToDatabase = async () => {
    const connection = await createConnection()
    console.log(`App connected to DB ${connection.options.database}.`)

    process.on('SIGINT', () => {
        connection.close().then(() => {
            console.log("DB connection closed!")
        })
    })
}
const app = require("./app")

const dotenv = require("dotenv")

// Configuración para el acceso a los parámetros establecidos en .env.
dotenv.config({
    path: "backend/config/.env"
})

// Creación servidor.
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost${process.env.PORT}`)
})
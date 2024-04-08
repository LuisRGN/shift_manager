import { server } from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data_source";

const startServer = async () => {
    try {
        await AppDataSource.initialize()
        console.log("Conexión a la BD establecida")
        server.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`)
        });
    } catch (error) {
        console.error("Error al iniciar el servidor:", error)
    };
};
startServer();



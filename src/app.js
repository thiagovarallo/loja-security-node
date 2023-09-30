import express from 'express';
import usuarios from './routes/usuariosRoutes.js';
import connectData from './database/dbConfig.js';
import produtos from './routes/productsRoutes.js';

const connect = await connectData();

connect.on("error", (erro) => {
    console.error("erro de conexão", erro);
});
  
connect.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
app.use(express.json());
app.use('/usuario', usuarios);
app.use('/produtos', produtos)

export default app;
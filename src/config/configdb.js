import mongoose from "mongoose";

const conexao = async () => {
    mongoose
        .connect(`${process.env.URI}`)
        .then(() => console.log("Sucesso ao conectar aomongoDB"))
        .catch((error) => console.error("Erro ao conectar no mongodb", error))
}
export default conexao
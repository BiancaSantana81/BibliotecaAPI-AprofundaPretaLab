import mongoose from "mongoose";
import 'dotenv/config';

export async  function connectMongo(uri:string){
    try {
        await mongoose.connect(uri);
    } catch(error) {
        console.error('Erro ao conectar com o banco de dados: ', error);
        process.exit(1);
    }
}

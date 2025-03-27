import mongoose from "mongoose";

export const connecDB = async () => {
    await mongoose.connect('mongodb+srv://demalma_admin:NousSommes9EnToutDansCeProjet!@cluster0.ml5gd.mongodb.net/demalma-project').then(()=>console.log("DB Connected"));

}
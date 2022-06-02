import mongoose from "mongoose";

async function createConnexion () {
    try{
        await mongoose.connect("mongodb://localhost/users", {
            autoIndex: true
        })

        console.log("connexion reussi !!");
    }catch(err){
        console.log(err);
    }
}

export default createConnexion
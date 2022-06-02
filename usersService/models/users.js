import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    age: {
        type: Number,
        require: true
    }
})

const User = mongoose.model("user", UserSchema)

export default User
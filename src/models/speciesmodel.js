import { Schema, model } from "mongoose";
import { type } from "os";

const species = new Schema({
    name : {
        type: String,
        required: true
    },  
    discoverylocation: {
        type: String,
        required: true
    },
    rarity: {   
        type: Number,
        required: true
    },
    documented: {
        type: Boolean,
        default: false,
        required: true
    }
})

export default model("species", species)
import { Schema,model } from "mongoose";
import { type } from "os";


const explorer = new Schema ({
    name: { 
        type: String,
        required: true
    },
    fieldofstudy : {
        type:String,
        required: true
    },
    Expeditionsparticepted: {
        type: Number,
        required: true
    }
})

export default model("explore", explorer)
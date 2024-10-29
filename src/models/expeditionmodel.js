import { Schema, model } from "mongoose";
import { type } from "os";



const expedition = new Schema({
    location: {
        type: String,
        required: true
    
    },
    date:{
        type:Date,
        required:true
    },
    participants:{
        type: [Schema.Types.ObjectId],
        ref: "explorer",
        required: true
    },
    speciesfound: {
      type: [Schema.Types.ObjectId],
      ref: "species",
      required:true
    }
})

export default model("expediction", expedition)
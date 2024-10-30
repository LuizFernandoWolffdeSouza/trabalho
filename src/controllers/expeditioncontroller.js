import expeditionmodel from "../models/expeditionmodel.js";

 export async function store(req,res) {
    try {
        const expediction = await expeditionmodel.create(req.body)
        res.status(200).json(expediction)
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
export async function index(req,res) {
    try {
        const expediction = await expeditionmodel.find() .exec()
        res.status(200).json({mensagem:"Listado com sucesso" ,expediction})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}

export async function update(req,res) {
    try {
        const expediction = await expeditionmodel.findByIdAndUpdate(req.params.id, req.body) .exec()
        res.status(200).json({ mensagem:"Listado com sucesso", expediction})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
export async function show(req,res) {
    try {
        const expediction = await expeditionmodel.findById(req.params.id) .exec()
        res.status(200).json({ mensagem:"Listado com sucesso", expediction})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
export async function destroy(req,res) {
    try {
        const expediction = await expeditionmodel.findByIdAndUpdate(req.params.id, req.body) .exec()
        res.status(200).json({ mensagem:"deletado com sucesso", expediction})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
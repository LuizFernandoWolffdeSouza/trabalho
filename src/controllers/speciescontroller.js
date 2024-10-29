import speciesmodel from "../models/speciesmodel.js"

 export async function store(req,res) {
    try {
        const species = await speciesmodel.create(req.body)
        res.status(200).json(species)
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
export async function index(req,res) {
    try {
        const species = await speciesmodel.find() .exec()
        res.status(200).json({ mensagem :"Listado com sucesso"})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}

export async function update(req,res) {
    try {
        const species = await speciesmodel.findByIdAndUpdate(req.params.id, req.body) .exec()
        res.status(200).json({ mensagem:"Atualizado com sucesso", explorer})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
export async function show(req,res) {
    try {
        const species = await speciesmodel.findById(req.params.id) .exec()
        res.status(200).json({ mensagem:"modficado com sucesso", species})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
export async function destroy(req,res) {
    try {
        const species = await speciesmodel.findByIdAndUpdate(req.params.id, req.body) .exec()
        res.status(200).json({ mensagem:"deletado com sucesso", species})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
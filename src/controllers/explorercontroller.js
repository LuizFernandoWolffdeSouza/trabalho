import explorermodel from "../models/explorermodel.js"

 export async function store(req,res) {
    try {
        const explorer = await explorermodel.create(req.body)
        res.status(200).json(explorer)
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
export async function index(req,res) {
    try {
        const explorer = await explorermodel.find() .exec()
        res.status(200).json({ mensagem :"Listado com sucesso"})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}

export async function update(req,res) {
    try {
        const explorer = await explorermodel.findByIdAndUpdate(req.params.id, req.body) .exec()
        res.status(200).json({ mensagem:"Atualizado com sucesso", explorer})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
export async function show(req,res) {
    try {
        const explorer = await explorermodel.findById(req.params.id) .exec()
        res.status(200).json({ mensagem:"modficado com sucesso", explorer})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
export async function destroy(req,res) {
    try {
        const explorer = await explorermodel.findByIdAndUpdate(req.params.id, req.body) .exec()
        res.status(200).json({ mensagem:"deletado com sucesso", explorer})
    }
    catch(error){
        res.status(400).json({mensagem:  error.mensagem})
    }
    
}
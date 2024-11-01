import { Router } from "express";
import { 
    store,
    index,
     show,
    update,
    destroy
 } from "../controllers/speciescontroller.js"
 const router = Router()

 router.get('/', index)
 router.get('/:id', show)
 router.post('/', store)
 router.put('/:id', update)
 router.delete('/:id', destroy)

 export default router
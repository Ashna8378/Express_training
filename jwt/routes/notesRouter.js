import { Router } from "express";
import jwt from 'jsonwebtoken'

const notesRouter = Router()

const notes = []
const SECRET_KEY = "ashna123"


notesRouter.post('/create', (req,res)=>{
    const note = req.body

    const authHeader = req.get('Authorization')
    const token = authHeader.replace('Bearer ', '').trim()
    console.log(token)

    if(!note.content){
        res.status(400).end()
    }

    const decodedToken = jwt.verify(token, SECRET_KEY)
    console.log(decodedToken)



    const newNote = {
        content: note.content,
        author: decodedToken.username
    }
    notes.push(newNote)

    console.log(notes)

    res.json(newNote)
})



export default notesRouter;




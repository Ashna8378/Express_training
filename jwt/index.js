import express from 'express'
import userRouter from './routes/userRouter.js'
import notesRouter from './routes/notesRouter.js'

const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello world')
})

app.use('/user', userRouter)
app.use('/note',notesRouter)

const PORT = 4000
app.listen(PORT,function(){
    console.log(`Server is running on port ${PORT}`)
})






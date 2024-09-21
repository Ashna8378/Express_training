import express from "express"

const app = express()


let notes = [
    {id:1, content:"ATML is easy", important:true},
    {id:2, content:"Crowser can execute only javascrpt", important:true},
    {id:3, content:"BET and POST are the most important methods of HTTP protocoal", important:true}

]




app.get("/", function (req, res) {
    const limit = req.query.limit;
    const order = req.query.order;

    let sortedNotes = [...notes];

    if (order === "asc") {
        sortedNotes.sort((a, b) => a.content.localeCompare(b.content));
    } else if (order === "desc") {
        sortedNotes.sort((a, b) => b.content.localeCompare(a.content));
    }

    if (limit != undefined && limit > 0) {
        return res.json(notes.slice(0, limit));
    }

    res.json(sortedNotes);
});


app.get("/post/:id",function(req,res){
    const id = Number(req.params.id)
    const note = notes.filter(note => note.id == id )
    
    if(note.length === 0){
        return res.status(404).json({msg: "note does not exist"})
    }
    res.json(note)
})




app.listen(3000,function(){
    console.log("server is running on the port 3000")
})




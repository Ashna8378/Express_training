import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));

// BMI calculation POST route
app.post("/bmi", function(req, res) {
    console.log(req.body);
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight / (height * height);
    res.send(`BMI is ${bmi}`);
});


// Change port to 4001
app.listen(4001, function() {
    console.log("Server is running on port 4001");
});



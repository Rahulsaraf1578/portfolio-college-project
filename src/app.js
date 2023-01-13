const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/register");
// import alert from 'alert'
const port = process.env.PORT || 3000;

// setting the path
const staticpath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const images_path = path.join(__dirname, "../public/images");


app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(images_path));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/service", (req, res) => {
    res.render("service");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.post("/add", async (req, res) =>{
    try {
        const workerrecord = new Register({

            firstname: req.body.firstname,
            lastname: req.body.lastname,
            country: req.body.country,
            enteremail: req.body.enteremail,
            phoneNumber: req.body.phoneNumber,
            subject: req.body.subject
        });
        const workerstatus = await workerrecord.save();
        res.status(201).render("index")

        
    } catch (error) {
        res.status(400).send(error);
    }
});

//server
app.listen(port, () =>{console.log(`server is running at port no ${port}`);})


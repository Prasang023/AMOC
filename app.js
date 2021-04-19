const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();


app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://admin-prasang:test123@cluster0.6dkwq.mongodb.net/sahyogdb", {useNewUrlParser: true});

//Report collection
const reportSchema = {
    name: String,
    phone: Number,
    whatsapp: Number,
    email: String,
    address: String,
    desc: String,   
};

const Report = mongoose.model("Report", reportSchema);

app.post("/report", function(req,res){
    const report = new Report({
        name: req.body.newn,
        phone: req.body.newp,
        whatsapp: req.body.neww,
        email: req.body.newe,
        address: req.body.newa,
        desc: req.body.newd,
    });
    report.save();
    res.redirect('/');
});
// report collection end

//contact collection 
const contactSchema = {
    name: String,
    email: String,
    subject: String,
    message: String,  
};

const Contact = mongoose.model("Contact", contactSchema);

app.post("/contact", function(req,res){
    const contact = new Contact({
        name: req.body.newn,
        email: req.body.newe,
        message: req.body.newm,
        subject: req.body.news,
    });
    contact.save();
    res.redirect('/contactus');
});
//contact collection ends

//animal-abuse collection
const abuseSchema = {
    name: String,
    phone: Number,
    whatsapp: Number,
    email: String,
    address: String,
    desc: String,   
};

const Abuse = mongoose.model("Abuse", reportSchema);

app.post("/abuse", function(req,res){
    const abuse = new Abuse({
        name: req.body.newn,
        phone: req.body.newp,
        whatsapp: req.body.neww,
        email: req.body.newe,
        address: req.body.newa,
        desc: req.body.newd,
    });
    abuse.save();
    res.redirect('/animalabuse');
});
//animal-abuse collection ends

//animal-injury collection
const injurySchema = {
    name: String,
    phone: Number,
    whatsapp: Number,
    email: String,
    address: String,
    desc: String,   
};

const Injury = mongoose.model("Injury", injurySchema);

app.post("/injury", function(req,res){
    const injury = new Injury({
        name: req.body.newn,
        phone: req.body.newp,
        whatsapp: req.body.neww,
        email: req.body.newe,
        address: req.body.newa,
        desc: req.body.newd,
    });
    injury.save();
    res.redirect('/animalinjury');
});
//animal-injury collection ends

//animal-adopt collection
const adoptSchema = {
    name: String,
    phone: Number,
    whatsapp: Number,
    email: String,
    Code: String,
    desc: String,   
};

const Adopt = mongoose.model("Adopt", adoptSchema);

app.post("/adopt", function(req,res){
    const adopt = new Adopt({
        name: req.body.newn,
        phone: req.body.newp,
        whatsapp: req.body.neww,
        email: req.body.newe,
        address: req.body.newc,
        desc: req.body.newd,
    });
    adopt.save();
    res.redirect('/adoptform');
});
//animal-adopt collection ends



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
});

app.get("/aboutus", function(req, res) {
    res.sendFile(__dirname + "/public/about-us.html")
});

app.get("/adopt", function(req, res) {
    res.sendFile(__dirname + "/public/ready-to-adopt.html")
});

app.get("/report", function(req, res) {
    res.sendFile(__dirname + "/public/report.html")
});

app.get("/animalabuse", function(req, res) {
    res.sendFile(__dirname + "/public/animal-abuse.html")
});

app.get("/animalinjury", function(req, res) {
    res.sendFile(__dirname + "/public/animal-injury.html")
});

app.get("/NGO", function(req, res) {
    res.sendFile(__dirname + "/public/NGO.html")
});

app.get("/contactus", function(req, res) {
    res.sendFile(__dirname + "/public/contact-us.html")
});

app.get("/adoptform", function(req, res) {
    res.sendFile(__dirname + "/public/adopt-form.html")
});




let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function() {
  console.log("Server started on port 3000");
});

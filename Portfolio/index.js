const express = require("express");
const app = express();
const path = require("path");
const  { v4 : uuidv4 } = require("uuid");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


let info = [
    {
        id : uuidv4(),
        name: "Rajia Rani",
        age : 28,
       email: "rajia@gmail.com",
       phone: 900000078,
    }
];
let exp = [
        {  
            id : uuidv4(), 
            year: "5 years",
            profile:"Assistant Professor ",
            area : "Chemistry"
        }
       ];

let edu = [
        {
            id : uuidv4(),
            deg:"MSc (Chemistry)",
            clg:"Lovely Professional University (Punjab, India)",
            marks:"70%",
        },
        {
            id : uuidv4(),
            deg:"BSc(Non-Medical)",
            clg:"PCMD college for women (Punjab, India)",
            marks:"75%",
        },
        {
            id : uuidv4(),
            deg:"12",
            clg:"Sr.Sec.Govt.Girls School Nehru Garden (Punjab)",
            marks:"78%",
        }
    ];


let skills = [
    {
        id : uuidv4(),
        skill1: "html",
        skill2:"css",
        skill3: "javaScript",
        skill4:"c++",
        skill5: "java",
        skill6:"SQL",
        skill7: "MongoDB",
        skill8:"Bootstrap",
    }
];
// Index route
app.get("/portfolio", (req,res) => {
    res.render("index.ejs", {info, edu, exp, skills});
});

// Education Route
// Show Route
app.get ("/portfolio/:id/show", (req,res) => {
    let { id } = req.params;
    let Ed = edu.find((e) => id === e.id);
    res.render("edushow.ejs");
});




app.listen(8080, () => {
    console.log("Hello, i am listening on port 8080.")
});
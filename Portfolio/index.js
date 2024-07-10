const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


let info = [
    {
        name: "Rajia Rani",
        age : 28,
       email: "rajia@gmail.com",
       phone: 900000078,
    }
];
let exp = [
        {   
            year: "5 years",
            profile:"Assistant Professor ",
            area : "Chemistry"
        },
        {   
            year: "3 years",
            profile:"Assistant Professor ",
            area : "Chemistry"
        },
       ];

let edu = [
        {
            deg:"MSc (Chemistry)",
            clg:"Lovely Professional University (Punjab, India)",
            marks:"70%",
        },
        {
            deg:"BSc(Non-Medical)",
            clg:"PCMD college for women (Punjab, India)",
            marks:"75%",
        },
        {
            deg:"12",
            clg:"Sr.Sec.Govt.Girls School Nehru Garden (Punjab)",
            marks:"78%",
        }
    ];


let skills = [
    {
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


app.listen(8080, () => {
    console.log("Hello, i am listening on port 8080.")
});
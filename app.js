var express =require("express");
var bodyParser = require ("body-parser");
var mongoose = require ("mongoose");
const res = require("express/lib/response");

const app = express()
app.use(bodyParser.json())
app.use(express.static('public')) 
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://Localhost:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true                 //  Deprecation warning resolved
});

var db = mongoose.connection;

db.on('error', ()=>console.log("error in Connecting to data base"));
db.on('open', ()=>console.log("Connected to DataBase"))

//Payment 

app.post("/payment",(req,res)=>{
    var name = req.body.name;
    var transID= req.body.transID;

    var data = {
        "name":name,
        "transID":transID
    }

    db.collection('payment').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted successfully");
    });
    return res.redirect('Payment_Successful.html')
})

// Payment end


// contact  

app.post("/contact",(req,res)=>{
    var FirstName = req.body.FirstName;
    var LastName= req.body.LastName;
    var email= req.body.email;
    var contact= req.body.contact;
    var Message= req.body.Message;

    var data = {
        "FirstName":FirstName,
        "LastName":LastName,
        "email":email,
        "contact":contact,
        "Message":Message
    }

    db.collection('contactus').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted successfully");
    });
    return res.redirect('Contact_feedback.html')
})
//contact end

// Appointment 


app.post("/Appointment",(req,res)=>{
    var FirstName = req.body.FirstName;
    var Lastname= req.body.Lastname;
    var Contact= req.body.Contact;
    var city= req.body.city;
    var state= req.body.state;
    var Zipcode= req.body.Zipcode;
    var issue= req.body.issue;
    var Emergency= req.body.Emergency;

    var data = {
        "FirstName":FirstName,
        "Lastname":Lastname,
        "Contact":Contact,
        "city":city,
        "state":state,
        "Zipcode":Zipcode,
        "issue":issue,
        "Emergency":Emergency
    }

    db.collection('Appointment').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted successfully");
    });
    return res.redirect('Appointment_Success.html')
})


//Appointment end


// emergency  

app.post("/Emergency",(req,res)=>{
    var FirstName = req.body.FirstName;
    var LastName= req.body.LastName;
    var Contact= req.body.Contact;
    var Latitude= req.body.Latitude;
    var Longitude= req.body.Longitude;

    var data = {
        "FirstName":FirstName,
        "LastName":LastName,
        "Contact":Contact,
        "Latitude":Latitude,
        "Longitude":Longitude
    }

    db.collection('Emergency').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted successfully");
    });
    return res.redirect('Emergencysuccess.html')
})

// Emergency 




// allow access origin

app.get("/",(req,res)=>{
    req.setEncoding({

        "Allow-access-Alllow-origin": "*"
    })
    return res.redirect('index.html')
}).listen(3000);                          //port no 3000

console.log("Listening on port 3000");
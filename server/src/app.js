const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogSchema = require('./blogSchema')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.set('strictQuery', false);
const URL = "mongodb+srv://admin:admin@cluster0.blmgq1o.mongodb.net/handleBlog?retryWrites=true&w=majority";
mongoose.connect(URL,
  {
    useNewUrlParser: true,
  }
).then(()=>{
    console.log("mongoose connected!")
});

const registerSchema = new mongoose.Schema({
    name:String,
    email : String,
    password : String,
    cPassword: String,
    blogs : blogSchema
})


const Register = mongoose.model('register', registerSchema)
const Blog = mongoose.model('blog', blogSchema);


app.post('/signup', cors() , async(req,res)=>{

    let {name , email,  password , cPassword}= req.body;
    var register = new Register({
        name : name,
        email : email,
        password : password,
        cPassword : cPassword
        // blogs : []
    })
    console.log(email)
    register.save(function (err, post) {
        if (err) { return next(err) }
        console.log("data inserted!")
        // res.json(201, post)
      })
})

app.post('/create', (req,res)=>{
    let {title , content} = req.body;
    var blog = new Blog({
        title : title,
        content : content
    })
    blog.save((err , post)=>{
        if(err){return next(err)}
        res.send({message: "blog created !"})
    })
})



app.post('/login', cors() , async(req,res)=>{
    let {email , password } = req.body;
    console.log(email);
    Register.findOne({email : email}, (err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message :  true});
            }
            else{
                res.send({message :  "Password didn't match !"});
            }
        }
        else{
            res.send({message :  "User Not Registerd!"});
        }

    })

})

app.get('/login', (req,res)=>{
    res.send("")
})
app.get('/blogs', (req,res)=>{

    Blog.find({}, (err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data)
            console.log(data)
        }
    })
})

app.listen(5000,(req,res)=>{
    console.log("server is running!");
})
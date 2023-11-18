const mongoose = require('mongoose');

main().then(()=>{
    console.log("connected to database")
}).catch((err) => console.log(err))


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

const User = mongoose.model("User", userSchema)

User.create({
    name: "amit",
    age: 20,
    email: "amit@gmail.com"
})



// user2.save().then((res) =>{
//     console.log(res)
// }).catch((err)=> console.log(err))
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

// User.create({
//     name: "amit",
//     age: 20,
//     email: "amit@gmail.com"
// })

User.insertMany([
    {name: "henry", age: 23, email: "henry@gmail.com"},
    {name: "andru", age: 24, email: "andru@gmail.com"},
    {name: "tom", age: 27, email: "tom@gmail.com"},
])



// +++++++++ Another method to add new users in the db ++++++++++ //

// const user2 = new User({
//     name: "amit",
//     age: 20,
//     email: "amit@gmail.com"
// })

// user2.save().then((res) =>{
//     console.log(res)
// }).catch((err)=> console.log(err))
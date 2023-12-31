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

// ++++++++++ find commands +++++++++++ //

// User.find({}).then(res => console.log(res))

// User.find({age :{$lt: 22}}).then(res=> console.log(res))

// User.findOne({age :{$lt: 22}}).then(res=> console.log(res))

// User.findById("6558ab4c4185952b16859a3f").then(res=> console.log(res))


//+++++++++++ create commands +++++++++++//

// User.create({
//     name: "amit",
//     age: 20,
//     email: "amit@gmail.com"
// })

// User.insertMany([
//     {name: "henry", age: 23, email: "henry@gmail.com"},
//     {name: "andru", age: 24, email: "andru@gmail.com"},
//     {name: "tom", age: 27, email: "tom@gmail.com"},
// ])



// +++++++++ Another method to add new users in the db ++++++++++ //

// const user2 = new User({
//     name: "amit",
//     age: 20,
//     email: "amit@gmail.com"
// })

// user2.save().then((res) =>{
//     console.log(res)
// }).catch((err)=> console.log(err))


// ++++++++++++ updation command ++++++++++++ //

// User.updateOne({name: "lokesh"}, {age: 25}).then(res=> console.log(res))

// User.updateMany({age : {$lt : 23}}, {age: 30}).then(res=> console.log(res))

// User.findOneAndUpdate({name: "lokesh"}, {age:45}).then(res=> console.log(res))

// User.findOneAndUpdate({name: "lokesh"}, {age:45}, {new : true}).then(res=> console.log(res))

// User.findByIdAndUpdate("6558a40c0c3741f75b2ef576", {name: "lucky shriwas"}, {new: true}).then(res=>console.log(res))

// +++++++ deletion commands ++++++++++ //

// User.deleteOne({_id : "6558a57c8ca8eb1984f84b2b"}).then(res=> console.log(res))

// User.findOneAndDelete({name: "tom"}, {new : true}).then(res=> console.log(res))

// User.findByIdAndDelete("6558a44d715e28d150e9cfa2", {new: true}).then(res => console.log(res))
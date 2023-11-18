const mongoose = require("mongoose")

main()
.then(res=> console.log("connection stablised"))
.catch((err)=> console.log(err))


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


// +++++++++ defining constraints in schema +++++++++++  //

const bookschema = new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    author : {
        type: String,
    },
    price : {
        type: Number,
        min: [1, "smaller than minimum selling price"]
    },
    category : {
        type: String,
        enum: ["friction", "nonfriction", "selfhelp"]
    },
    discount: {
        type: Number,
        default : 0
    }
})

const Book = mongoose.model("Book", bookschema)

// +++++++++ created data with contraints +++++++ //

// Book.create({
//     title: "psychology of money",
//     author: "lokesh",
//     price: 99,
//     category: "selfhelp"
// }). then(res=> console.log(res))
// .catch((err)=> console.log(err))



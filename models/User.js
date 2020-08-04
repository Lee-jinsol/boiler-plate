const mongoose = require ('mongoose'); //mongoose 모듈 가져오기

const userSchema = mongoose.Schema({ //mongoose 이용해서 스키마 작성
    name: {
        type: String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true,
        unique:1
    },
    password: {
        type: String,
        minlength:50
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role :{
        type : Number,
        default:0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type:Number
    }
})

const User = mongoose.model('User',userSchema)
module.exports = { User }

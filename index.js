const express = require('express') //express모듈 가져옴
const app = express() //새로운 express app 생성
const port = 5000 //3000번 포트를 백서버로 둠
const {User} = require("./models/User");
const bodyParser = require('body-parser');
const config = require('./config/key');

//application/x-www-form-urlencoded <= 이데이터를 분석해서 가져올수 있도록 
app.use(bodyParser.urlencoded({extended:true }));
//application/json <= 이데이터를 분석해서 가져올수 있도록 
app.use(bodyParser.json());

const mongoose =require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected ...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
}) //루트디렉토리에 헬로월드 출력되게 함

app.post('/register',(req,res)=>{ //end point: register, callback function : req&res
    //회원가입할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터베이스에 넣어준다. =>그래서 유저모델을 가져와야한다. line4
    const user = new User(req.body) //=>받아온 정보들을 데이터베이스에 넣기 위해서(bodyParser가 있어서 가능한것)
    user.save((err,userInfo) => { //save()는 몽고디비 메소드임.req.body값이 user모델에 저장이 됨 
        if(err) return res.json({success:false,err}) //err있으면 json형태로 전달
        return res.status(200).json({ //200은 성공했다는거
            success: true
        })
    }) 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) //5000번포트에서 실행하겠다 
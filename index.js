const express = require('express') //express모듈 가져옴
const app = express() //새로운 express app 생성
const port = 5000 //3000번 포트를 백서버로 둠

const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://leejinsol:leesola97=@boilerplate.yspmp.mongodb.net/boilerplate?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected ...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
}) //루트디렉토리에 헬로월드 출력되게 함

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) //5000번포트에서 실행하겠다 
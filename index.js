// index.js는 백엔드의 시작점이다.

// express 모듈 가져옴
const express = require('express')
// express 앱 생성
const app = express()
// 특정 포트 백서버로 둠
const port = 8080
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./models/User");

// application/x-www-form-urlencoded를 client-> server로 분석해 가져옴
app.use(bodyParser.urlencoded({extended: true}));

// application/json을 분석해 가져옴
app.use(bodyParser.json());

// mongoose 모듈 가져옴
const mongoose = require('mongoose')

// mongodb 연결
mongoose.connect(config.mongoURI,{}
).then(() => console.log('MongoDB Connected...'))

// root 디렉토리에 hello world 출력
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요 반가워요')
})

//app.post(endpoint, callback function)
app.post('/register', (req, res) => {
    //회원 가입시 필요한 정보를 client에서 가져오면
    //그것들을 db에 넣어준다.

    // bodyParser이용해 정보를 받아 user에 저장
    const user = new User(req.body)

    //mongodb 메소드 user에 저장
    user.save().then(() => {
        res.status(200).json({
            success: true
        })
    }).catch((err) => {
        return res.json({ success: false, err })
    })
})

// port에서 앱 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// package.json의 script에 start로 node index.js 추가후
// 터미널에서 npm start로 실행 or npm run backend
//$ killall -9 node 사용: error listen edadrinuse address already in use
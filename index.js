// index.js는 백엔드의 시작점이다.

// express 모듈 가져옴
const express = require('express')
// express 앱 생성
const app = express()
// 특정 포트 백서버로 둠
const port = 8080

// mongoose 모듈 가져옴
const mongoose = require('mongoose')

// mongodb 연결
mongoose.connect('mongodb+srv://yoojin:yoojin@cluster0.06pbiyy.mongodb.net/?retryWrites=true&w=majority',{}
).then(() => console.log('MongoDB Connected...'))

// root 디렉토리에 hello world 출력
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

// port에서 앱 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// package.json의 script에 start로 node index.js 추가후
// 터미널에서 npm start로 실행
//$ killall -9 node 사용: error listen edadrinuse address already in use
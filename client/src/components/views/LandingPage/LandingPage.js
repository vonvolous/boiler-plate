import React, {useEffect} from 'react'
import axios from 'axios'

function LandingPage() {

  useEffect(() => {
    axios.get('/api/hello') // get request를 서버에 보냄
    .then(response => console.log(response.data)) //그리고 받은 결과를 콘솔에 출력
  }, [])

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <h2>시작 페이지</h2>
    </div>
  )
}

export default LandingPage

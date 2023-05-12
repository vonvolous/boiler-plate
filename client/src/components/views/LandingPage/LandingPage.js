import React, {useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/hello') // get request를 서버에 보냄
    .then(response => console.log(response.data)) //그리고 받은 결과를 콘솔에 출력
  }, [])


  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(response => {
      if(response.data.success) {
        navigate('/login')
      } else {
        alert('로그아웃 하는데 실패하였습니다.')
      }
    })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <h2>시작 페이지☆</h2>

      <button onClick={onClickHandler}>
        로그아웃
      </button>
    </div>
  )
}

export default LandingPage


import './App.css';
import { useState } from 'react';

function App() {

  
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남우동 맛집', '파이썬 독학'] );
  let [따봉, 따봉변경] = useState(0);
  
  return (
    <div className="App">
      <div className='main-nav'>
        <h4>React Blog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
        }}>글수정</button>

      <button onClick={()=>{
        let 정렬 = [...글제목];
        정렬.sort();
        글제목변경(정렬);
        }}>정렬해요</button>
      

      <div className='list'>
        <h4>{ 글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>좋아요 😀</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;

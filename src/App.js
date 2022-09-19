
import './App.css';
import { useState } from 'react';

function App() {

  
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남우동 맛집', '파이썬 독학'] );
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setmodal] = useState(false);
  let [title, settitle] = useState(0);
  let [입력값, 입력값변경] = useState(0);
  
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

    {
      글제목.map(function(a,i){
        return (
        <div className='list' key='i'>
        <h4 onClick={()=>{setmodal(true); settitle(i);}}>{글제목[i]} <span onClick={()=>{let copy=[...따봉]; 
          copy[i]=copy[i]+1; 따봉변경(copy)}}>좋아요 😀
        </span> {따봉[i]} </h4>
        <p onClick={()=>{setmodal(false)}}>2월 17일 발행</p>
        <button onClick={()=>{let copy=[...글제목]; copy.splice(i,1); 글제목변경(copy);}}>삭제</button>
      </div>
      )
      })
    }
      {modal=true? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}></Modal>: null}

      <input type='text' onChange={(e)=>{입력값변경(e.target.value)}}></input>
      <button onClick={(e)=>{let copy= [...글제목]; copy.unshift(입력값); 글제목변경(copy);}}>추가</button>
    </div>
  );
}

const Modal = (props)=>{ return(
    <div className='modal'>
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{let copy=[...props.글제목]; copy[0]='여자코트 추천'; props.글제목변경(copy);}}>글수정</button>
  </div>
)
};















export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';
import './App.css';
import React, { useReducer, useRef } from 'react';




const reducer=(state, action)=>{
  let newState=[];
  switch(action.type){
    case "INIT":
      return action.data;
    case "CREATE":{
      // const newItem={
      //   ...action.data,
      // };
      // newState=[newItem, ...state];

      newState=[action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState=state.filter(it=>it.id!== action.targetId);
      break;
    }
    case "EDIT":{
      newState=state.map(it=>
        it.id===action.data.id? {...action.data}: it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
}
export const DiaryStateContext=React.createContext();
export const DiaryDispatchContext=React.createContext();

const dummyData=[
  {
    id:1,
    emotion:1,
    content: "오늘의 일기 1",
    date: 1671700139057
  },
  {
    id:2,
    emotion:3,
    content: "오늘의 일기 2",
    date: 1671700139058
  },
  {
    id:3,
    emotion:2,
    content: "오늘의 일기 3",
    date: 1671700139059
  },
  {
    id:4,
    emotion:5,
    content: "오늘의 일기 4",
    date: 1671700139060
  },

  {
    id:5,
    emotion:4,
    content: "오늘의 일기 5",
    date: 1671700139061
  },


]


function App() {
//console.log(new Date().getTime());
const [data, dispatch]=useReducer(reducer,dummyData)
const dataId=useRef();

//CREATE
const onCreate=(date,content, emotion)=>{
  dispatch({
    type: "CREATE",
    data:{
      id: dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion
    },
  })
  dataId.current++;
}

// REMOVE
const onRemove=(targetId)=>{
  dispatch({type:"REMOVE", targetId});
}

// EDIT
const onEdit= (targetId, date,content, emotion)=>{
  dispatch({
    type: "EDIT",
    data:{
      id: targetId,
      date: new Date(date).getTime(),
      content,
      emotion
    }
  })
}



  return (
<DiaryStateContext.Provider value={data}>
<DiaryDispatchContext.Provider value={{onCreate, onRemove, onEdit}}>
<BrowserRouter>
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
     
    </div>
</BrowserRouter>
</DiaryDispatchContext.Provider>
</DiaryStateContext.Provider>
  );
}

export default App;

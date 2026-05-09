{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
 */}
import React, {  useCallback, useState } from 'react'
import ReactMemo from './ReactMemo';

 export default function App() {
    const [skill,setSkill]=useState([]);
    const [input,setInput]=useState('');


    const handleDelete=useCallback((id)=>{
         setSkill(skill.filter((el,idx)=>(idx !==id)))
    },[skill]);

    function handleChange(e){
        setInput(e.target.value)
    }

   function handleSubmit(e){
        setSkill(prev=>([...prev,input]));
        setInput('');
   }

//     function handleDelete(id){
//         setSkill(skill.filter((el,idx)=>(
//             idx !==id
//         )))
//    }

   return (
     <div>
        <input type='text' value={input} onChange={handleChange}/>
        <button onClick={handleSubmit}>submit</button>
        <ReactMemo handleDelete={handleDelete} skill={skill} />
     </div>
   )
 }
 
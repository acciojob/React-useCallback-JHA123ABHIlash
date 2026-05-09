{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
 */}
import React, {  useCallback, useState } from 'react'
import ReactMemo from './ReactMemo';

 export default function App() {
    const [skill,setSkill]=useState(["HTML",
   "CSS",
   "JavaScript",
   "React"]);
    const [input,setInput]=useState('');
   const [error,setError]=useState('')


    const handleDelete=useCallback((id)=>{
         setSkill(skill.filter((el,idx)=>(idx !==id)))
    },[skill]);

    function handleChange(e){
        setInput(e.target.value)
    }

function handleSubmit(){

   if(input.trim()===''){
      setError("Please Enter your skill.");
      return;
   }

   if(skill.includes(input)){
      setError("Skill already exists.");
      return;
   }

   setSkill(prev => [...prev,input]);
   setInput('');
   setError('');
}

//     function handleDelete(id){
//         setSkill(skill.filter((el,idx)=>(
//             idx !==id
//         )))
//    }

   return (
     <div>
        <input type='text' value={input} onChange={handleChange} id="skill-input"/>
        <button onClick={handleSubmit} id="skill-add-btn">submit</button>
        <h1 id="heading">Skills</h1>
        <ReactMemo handleDelete={handleDelete} skill={skill} />
        <p>{error}</p>
     </div>
   )
 }
 
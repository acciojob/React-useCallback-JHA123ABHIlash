import React from 'react'

const ReactMemo=React.memo(function ReactMemo({skill,handleDelete}){
   return (
     <ul>
            {skill.map((el,idx)=>(
                <li key={idx} onClick={()=>handleDelete(idx)}>{el}</li>
            ))}
        </ul>
   )
})

export default ReactMemo;
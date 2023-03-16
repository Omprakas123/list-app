import React, {   useState } from 'react'
import "./Style.scss";
const App = () => {
  const [datav,setdata]=useState([]);
  const [value,setvalue]=useState();
  
  const storevalue=()=> 
  {
     setdata([...datav,value]);
    
  }
 

  return (
    <>
 
    <div className='box'>
      <div className='box1'>
        <h1 id="nam">ToDo List</h1>
      
        <div className='box3'>
   <input placeholder='Add a Items' onKeyPress={(eve)=>{
    return eve.key==="Enter"?storevalue():null;
   }}onChange={(e)=>{
    setvalue(e.target.value);
    
    
   }}/>
  
   <button  onClick={storevalue}> + </button>
   </div>
   <div className='box4'>
 
     <ul>

      {
        datav.map((items,index)=>
        {
          // console.log(index);
          return(
          <>
         <li> 
         <button id='uni' onClick={()=>{
               const apk=datav.filter((its,ind1)=>{
                return index!==ind1;
               });
          setdata(apk);

         }}  >❎</button>  
          <h1 >{items} </h1>
        
   </li>
  
          </>);
        })
      }
     
 
   </ul>

      
    
      </div>

  
    
    
   
   </div>
    </div>
    </>
  )
}

export default App
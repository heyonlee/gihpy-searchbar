import GiphyData from "../Data";
import {useState,useEffect} from "react"
import FilterContainer from "./FilterContainer";
//props  란 오브젝트에 지금 넣었는데 거기의 밸류로 props.onChange가 있음
//저 멀리에서 가져오는 듯?
function FilterList (props){
      
     return (
        <div><p>Giphy  GIFs </p>
        <input type="text" onChange={props.onChange}/>
        {/* <button onClick={handleClick}>Click</button> */}
        </div>
    )
}
   
export default FilterList;




// import GiphyData from "../Data";
// import {useState,useEffect} from "react"
// import FilterContainer from "./FilterContainer";
// //props  란 오브젝트에 지금 넣었는데 거기의 밸류로 props.onChange가 있음
// //저 멀리에서 가져오는 듯?
// function FilterList (){
//     const [input,setInput] = useState("")
//     const [image,setImage] = useState([])

//    async function handleClick(){
//     try{
//         const imageLists= await GiphyData(input)
//         console.log(imageLists) 
        
//         console.log(imageLists[0])
//         setImage(imageLists.map(x=>x.url))
//         }
        
//         catch(e){

//         console.log('error')
//         }
//     }
    
// useEffect(()=>{
//     handleClick()
// },[])

  



//     return (
//     <div>
//         <input type="text" onChange={(e)=>setInput(e.target.value)}/>
//         <button onClick={handleClick}>Click</button>
//         {image.map(x=><div> <img src = {'https://media1.giphy.com/media/' + x.split('-').slice(-1)[0] + '/giphy.webp?rid=giphy.webp&ct=g'} alt="gif"/></div>)}}
             
//     </div>

//     )

// }

// export default FilterList;
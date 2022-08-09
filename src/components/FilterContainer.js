import GiphyData from "../Data";
import {useState,useEffect} from "react"
import FilterList from "./FilterList";

function FilterContainer(){
       const [imageList,setImageList] = useState([])
       const [userInput,setUserInput] = useState('')

 async function search(event){   // 여기 함수에 들어있는 event는 자식콤포넌트에서 받아올것이다....
     event.preventDefault() 
     const filteredValue =event.target.value;
     console.log()
     setUserInput(filteredValue)
    
     let urlLists = await GiphyData(filteredValue)
     console.log(urlLists)
      setImageList(urlLists.map(x=>x.url))
     }
         
useEffect(()=>{ },[imageList])





    return (
        <div><p>Hello </p>
        <FilterList onChange={(e)=>search(e)}/>
        {/* <button onClick={search}>Click</button> */}
        {imageList.map((x,index)=><div> <img src = {'https://media1.giphy.com/media/' + x.split('-').slice(-1)[0] + '/giphy.webp?rid=giphy.webp&ct=g'} key={index} alt="gif"/></div>)}
        </div>
    )
}
   
export default FilterContainer;



// import { useState, useEffect } from "react";
// import FruitFilter from "./FruitFilter";
// import FruitList from "./FruitList";


// function FilterContainer(props) {
// //initialize the fruit list to the full list passed in props
//   const [image, setImage] = useState(props.fruits)

// //filter , handle the filter, update state when the filter value
//   // changes
//   // store the the filter state and filter the list of fruits to
//   // display

//   const handleFilterChange = (event) => {
//     event.preventDefault();
    
//     const filteredValue = event.target.value;

//     setFruitsToDisplay((_prevState) => {
//       //remove the fruits that don't contain the filter value
//       const filteredFruitList = props.fruits.filter((fruit) => {
//         return fruit.toLowerCase().includes(filteredValue.toLowerCase());
//       })
//       return filteredFruitList
//     })
//   }

//   useEffect(() => {
//   console.log("do something", fruitsToDisplay)
// }, [fruitsToDisplay])



//   return (
//     <div>
//       <FruitFilter onChange={(e) => handleFilterChange(e)}  />
//       <FruitList fruits={fruitsToDisplay}  />

//     </div>
//   )
// }
// //All of the data is hoisted to the top of the tree
// //and it is passed down to the child components

// export default FruitContainer

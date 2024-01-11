import { useState } from "react"

const Test = () => {
const [add, setAdd] = useState([
    { "id": 1, "name": "Object 1" },
    { "id": 2, "name": "Object 2" },
    { "id": 3, "name": "Object 3" },
    { "id": 4, "name": "Object 4" },
    { "id": 5, "name": "Object 5" },
    { "id": 6, "name": "Object 6" },
    { "id": 7, "name": "Object 7" },
    { "id": 8, "name": "Object 8" },
    { "id": 9, "name": "Object 9" },
    { "id": 10, "name": "Object 10" }
  ]);
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']; 
const numnbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const idFilter = (id) => {
    setAdd(add.filter((item,index) =>item.id!==id))
}



console.log("addd",add);


    return(
        <>
        {/* <h1>{add}</h1> */}
        <button onClick={() => idFilter(2)}>filter</button>
        {/* <button onClick={() => setAdd(add-1)}>decrement</button> */}

        </>
    )
}

export default Test; 
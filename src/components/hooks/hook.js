import {useState} from 'react'
const Hook = () => {

    const showTextInput = (event) => {
        console.log(event.target.value)
    }
    const selectChange = (event) => {
        console.log(event.target.value)
    }
    const increaseNumber = () =>{
        setNumber(number + 1)
        console.log(number)
    }

    //Number
    const [number,setNumber] = useState(() =>{
        const initialNumber = 0
        return initialNumber
    })
    //Array
    const [Array,setArray] = useState(()=>{
        const initialArray =['Huy','Linh Map']
        return initialArray
    })
    //Object
    const [object,setObject] = useState(()=>{
        const initialObject = {name: "Huy", lastName: "Le"}
        return initialObject
    })
    return (
        <div>
            <p>Tai sao app cua minh khong co file tsx</p>
            <button variant="contained" color="primary" onClick={() => increaseNumber()}>Click Me</button>
            <p>You cliked me {number} times </p>
            <input id="standard-basic" label="Standard" onChange={e => showTextInput(e)} />
            <select onChange={e => selectChange(e)}>
                <option value="select">Select</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
            </select>
        </div>
    )
}
export default Hook;
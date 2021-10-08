
import axios from "axios"
import React, {useState, useEffect} from "react"


function DataFetching() {
    const [id, setId] = useState(1)
    const [dataS, setDataS] = useState({})
    const [idFromButton, setIdFromButton] = useState(1)

    useEffect(()=>{
        const data = `http://jsonplaceholder.typicode.com/posts/${idFromButton}`
        axios.get(data)
        .then(res=>{
            console.log(res)
            setDataS(res.data)
        }).catch(error=>console.error(error))
    }, [idFromButton])

    const btnHandler = () => {
        setIdFromButton(id)
    }


    return(
        <div>
            <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
            <button type="button" onClick={btnHandler}>Fetch Post</button>
            <div>{dataS.title}</div>
            {/* <ul>
                {
                    dataS.map(each=> {
                        return <li key={each.id}>{each.title}</li>
                    })
                }
            </ul> */}
        </div>
    )
}

export default DataFetching

import {useContext} from "react"
import {UserContext, CrapContext} from "./App.js"




function SecondChild() {
    const user = useContext(UserContext)
    const crap = useContext(CrapContext)
    return(
        <div> Kek! {user} {crap}</div>
    )
}

export default SecondChild
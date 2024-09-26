// import { useState } from "react"
import "./Footor.css"
const Footor = ({dataT}) => {
  // const [value , setValue] = useState(0)


  return (
    <footer>
      <h3>You have {dataT.length} items on your list</h3>
    </footer>
  )
}

export default Footor

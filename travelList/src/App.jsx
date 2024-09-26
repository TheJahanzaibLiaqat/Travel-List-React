
import { useState } from 'react'
import './App.css'
import Footor from './componenets/Footor/Footor'
import Form from './componenets/Form/Form'
import Logo from './componenets/Logo/Logo'
import Packing from './componenets/Packing/Packing'

function App() {

  const [dataT, setData] = useState([])
  const dataChange = (newData) =>{
    setData((pre)=>[...pre, newData])
  }

  const onDataDel = (index) => {
       setData((pre)=> pre.filter((_, i) => i !== index))
  }

  const sortChange = () =>{
    const sortedData = [...dataT].sort((a,b) => {
      return a.optValue - b.optValue
    })

    setData(sortedData)
  }

  const onDeleteChange = () => {
    setData("")
  }


  return (
   <>
   <Logo />
   <Form addData = {dataChange}/>
   <Packing dataT={dataT}  dataDel={onDataDel} sortData= {sortChange} deleteAllData={onDeleteChange}/>
   <Footor dataT={dataT}/>
   </>
  )
}

export default App

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'


export default function Counter() {
  // state to hold the inpute value 
  const [range,setRange]=useState(0)
    const dispatch = useDispatch()

    // components can access the store by using useSelector
    const Count= useSelector((state)=>state.counter.value)
    console.log(range);

  return (

    <div style={{ height: '100vh' }} className="App d-flex align-items-center justify-content-center flex-column">
      <div className='bg-light rounded' style={{ height: '350px', width: '500px' }}>
        <div className='d-flex  justify-content-center mt-3'>
          <h1 className='text-primary'>Counter Application</h1>
        </div>
        <div className='d-flex  justify-content-center mt- 5'>
          <h1 style={{ fontSize: "60px", marginTop: "2rem" }} className='fw-3 '>{Count}</h1>
        </div>
        <div class="d-flex justify-content-around mt-5">
          {/* Number methode is used to convert string into number */}
          <button  style={{width:'100px'}} type="button" class="btn btn-success" onClick={()=>dispatch(increment(Number(range)))} >Increment</button>
          <button style={{width:'100px'}}  type="button" class="btn btn-warning"
          onClick={()=>dispatch(decrement(Number(range)))} >Decrement</button>
          <button   style={{width:'100px'}} type="button" class="btn btn-danger" onClick={()=>dispatch(reset())} >Reset</button>
          
        </div >

        <div className='mt-3 d-flex justify-content-center align-items-center'>
          <input type="number" onChange={(e)=>setRange(e.target.value)} className='form-control' placeholder='enter the range' style={{borderColor:'green',width:350}} /></div>

      </div>
    </div>
  )
}


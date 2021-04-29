import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyCake} from '../redux'

function CakeContainerHooks() {
  const numOfCakes =  useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
    return (
        <div>
            <h4>Num of cakes(Hooks) - {numOfCakes} </h4>
            <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default CakeContainerHooks

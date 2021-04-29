import React, { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function InputCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h4>Number of Cakes - {props.numOfCakes} </h4>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (InputCakeContainer)

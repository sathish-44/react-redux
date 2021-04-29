import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function iceCreamContainer(props) {
    return (
        <div>
            <h4>Number of IceCream - {props.numOfIceCream} </h4>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCream : state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (iceCreamContainer)

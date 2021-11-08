import React, { Component } from 'react'

class Band extends Component {

    render(){
        debugger
        const band = this.props.band.map((band) => band)
        return ({band})
    }
}

export default Band
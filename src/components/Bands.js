import React, {Component} from 'react';
import BandsContainer from '../containers/BandsContainer'
import Band from './Band';

const Bands = props => {

    const band = props.bands.map((band) => <Band band={band} />)
        // debugger
        return(
            <div>
                {band}
            </div>
        )
    }


export default Bands
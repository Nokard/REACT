import React, { Component } from 'react';

import { Time } from "../containers/Time";
import { Partida } from "../containers/Partida";


class PlacarContainer extends Component {
    render() {
        return (
            <div>
                <div>
                    <Time />
                </div>
                <div>
                    <Partida />
                </div>
                <div>
                    <Time />
                </div>
            </div>
        );
    }
}

export default PlacarContainer;
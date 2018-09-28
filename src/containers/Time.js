import React, { Component } from 'react';
import { BotaoGol } from "../components/BotaoGol";

export default class Time extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>Vasco</h1>
                    <h2>0</h2>
                    <BotaoGol />
                </div>
            </div>
        );
    }
}


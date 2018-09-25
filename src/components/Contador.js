import React from 'react'

export default class Contador extends React.Component {

    constructor(){
        super();

        this.state = {

            primeiro: 0,
            segundo : 0,
            resultado: 0,

       };
    }

    decrementarFirst(){
        this.setState({
            primeiro: this.state.primeiro - 1,
        });
    }

    incrementarFirst(){
        this.setState({
            primeiro: this.state.primeiro +1 ,
        })
    }

    decrementarSecond(){
        this.setState({
            segundo: this.state.segundo - 1,
        });
    }

    incrementarSecond(){
        this.setState({
            segundo: this.state.segundo +1 ,
        });
    }

    somar(){
        this.setState({
            resultado: (this.state.primeiro + this.state.segundo)
        });
    }
    subtrair(){
        this.setState({
            resultado: (this.state.primeiro - this.state.segundo)
        });
    }
    multiplicar(){
        this.setState({
            resultado: (this.state.primeiro * this.state.segundo),
        });
    }

    dividir(){
        this.setState({
            resultado: (this.state.primeiro / this.state.segundo),
        });
    }

    zerar(){
        this.setState({
            primeiro:  0,
            segundo: 0,
            resultado: 0,
        })
    }

    render() {
        return (
            <div>

                <h1> {this.state.primeiro} : {this.state.segundo} </h1>
                <h2> Resultado: {this.state.resultado} </h2>

                <p>
                <button onClick= {this.decrementarFirst.bind(this)}> - </button> <tab></tab>
                <button onClick= {this.incrementarFirst.bind(this)}> + </button> <tab></tab>
                --
                <button onClick= {this.decrementarSecond.bind(this)}> - </button> <tab></tab>
                <button onClick= {this.incrementarSecond.bind(this)}> + </button> <tab></tab>
                <button onClick= {this.zerar.bind(this)}> ZERAR </button>
                </p>
                
                <p> Operações </p>
                <button onClick= {this.somar.bind(this)} > + </button> <tab></tab>
                <button onClick= {this.subtrair.bind(this)} > - </button> <tab></tab>
                <button onClick= {this.multiplicar.bind(this)} > * </button> <tab></tab>
                <button onClick= {this.dividir.bind(this)} > / </button> <tab></tab>
                
                               
            </div>
     
        );
    }
}
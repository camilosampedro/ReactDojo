import React, {Component} from 'react';

export default class ComponenteResultado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultado: props.resultado
        };
    }


    render() {
        return (
            <div className="item">
                <div className="titulo">{this.state.resultado.title}</div>
                <div className="imagen"><img role="presentation" src={this.state.resultado.thumbnail}/></div>
                <div className="precio">Precio: ${this.state.resultado.price}</div>
                <div className="link"><a className="link" href={this.state.resultado.permalink}>Más información</a></div>
            </div>
        );
    }
}

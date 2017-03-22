import React, {Component} from 'react';
import Resultado from '../Resultado/Resultado'

export default class ComponenteBusquedaSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: []
        };
    }

    componentDidMount() {
        this.realizarPeticion('audifonos')
    }

    realizarPeticion(texto) {
        let _this = this;
        fetch('https://api.mercadolibre.com/sites/MCO/search?q=' + texto).then(result => result.json()).then(resultado => {
            _this.setState({resultados: resultado.results});
        }).catch(function (error) {
            console.error(error);
            return null;
        })

    }

    cambioInput(evento) {
        this.realizarPeticion(evento.target.value);
    }

    render() {
        return (
            <div>
                <div className="buscador">
                  <input name="busqueda" id="input" type="text" placeholder="Ingresa la búsqueda"
                  onChange={this.cambioInput.bind(this)}></input>
                </div>
                <div className="contenido">
                    {this.state.resultados.map(function (resultado, indice) {
                        return (
                            <Resultado key={resultado.id} resultado={resultado}></Resultado>
                        );
                    })
                    }
                </div>
            </div>
        );
    }
}

import React, {Component} from 'react';
import BusquedaSimple from './BusquedaSimple/BusquedaSimple';
import BusquedaPorCategoria from './BusquedaPorCategoria/BusquedaPorCategoria';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        // this.loadUsers();
        this.state = {
            seleccion: 1
        };
    }

    categoria = 'MCO1574';

    cambiarSeleccion(numero) {
        this.setState({seleccion: numero});
    }

    render() {
        let page;
        switch (this.state.seleccion) {
            default:
                page = <BusquedaSimple />;
                break;
            case 2:
                page = <BusquedaPorCategoria categoria={this.categoria}/>;
                break;
        }

        return (
            <div>
                <div className="menu">
                    <span className="logo">Develove</span>
                    <span>
                        <button className="boton-menu" onClick={this.cambiarSeleccion.bind(this, 1)}>Busqueda simple
                        </button>
                        <button className="boton-menu" onClick={this.cambiarSeleccion.bind(this, 2)}>Busqueda por
                            categorías
                        </button>
                    </span>
                </div>
                {page}
            </div>
        );
    }
}

export default App;

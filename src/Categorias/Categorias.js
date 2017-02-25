import React, {Component} from 'react';

export default class Categorias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: []
        };
    }

     componentDidMount() {
        this.state = {
            categorias: []
        };
        let _this = this;
        fetch('https://api.mercadolibre.com/sites/MCO/categories')
        .then((response) => response.json())
        .then((responseJson) => {
              this.setState({categorias: responseJson});
        }).catch(function(error) {
            console.error(error);
            return null;
        })
    }

    render() {
       return (
            <div>
                <h1>Categorias</h1>
                <select>
                {
                    this.state.categorias.map(categoria => {
                        return <option value={categoria.id}>{categoria.name}</option>
                    })
                }
                </select>
            </div>
           
        );
    }
}

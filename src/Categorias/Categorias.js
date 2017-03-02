import React, {Component} from 'react';

export default class Categorias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            categorias: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
      this.setState({value: event.target.value});
      console.log(event.target.value);
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
            // <div>
                // <h1>Categorias</h1>
                <select value={this.state.value} onChange={this.handleChange}>
                {this.state.categorias.map(categoria => <option value={categoria.id}>{categoria.name}</option>)}
                </select>
            // </div>
        );
    }
}

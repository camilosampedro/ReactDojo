import React, {Component} from 'react';
import Resultado from '../Resultado/Resultado';

class BusquedaPorCategoria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categorias: [],
      categoria: ''
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
          return [];
      })
      this.realizarPeticion('MCO1648');
    }
    realizarPeticion(categoria) {
      this.setState({categoria: categoria});
      var uri = "https://api.mercadolibre.com/sites/MCO/search?category="+categoria+"&official_store_id=all";
      fetch(uri)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({items: responseJson.results});
      })


    }

    cambioSelect(evento) {
      console.log(evento.target.value);
        this.realizarPeticion(evento.target.value);
    }

  render() {
    return (
      <div>

          <div className="buscador">
          <select value={this.state.categoria} onChange={this.cambioSelect.bind(this)}>
            {this.state.categorias.map(categoria => <option value={categoria.id}>{categoria.name}</option>)}
          </select>
          </div>
          <div className="contenido">
              {
              this.state.items.map(item => (
              <Resultado key={item.id} resultado={item} />)
              )}
        </div>
      </div>
    );
  }
}

export default BusquedaPorCategoria;

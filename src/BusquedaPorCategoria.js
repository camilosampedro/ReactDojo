import React, {Component} from 'react';

class BusquedaPorCategoria extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }
  componentDidMount(){
    var categoria = this.props.categoria;
    console.log(categoria);
    var uri = "https://api.mercadolibre.com/sites/MCO/search?category="+categoria+"&official_store_id=all";
    // var uri = "https://api.mercadolibre.com/sites/MCO/search?category=MCO1574&official_store_id=all";
    fetch(uri)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.results);
      this.setState({items: responseJson.results});
    })
  }

  render() {
    return (
      <div>
        <div className="contenido">
        <h2 className="resultados">Resultados:</h2>
          {this.state.items.map(item => (
            <div className="item">
              <div className="titulo">{item.title}</div>
              <div className="imagen"><img src={item.thumbnail}/></div>
              <div className="precio">Precio: ${item.price}</div>
              <div className="link"><a className="link" href={item.permalink}>Más información</a></div>
            </div>))}
        </div>
      </div>
    );
  }
}

export default BusquedaPorCategoria;

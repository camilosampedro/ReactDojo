import React, {Component} from 'react';

class BusquedaPorCategoria extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }
  componentDidMount(){
    var categoria = this.props.categoria;
    var uri = "https://api.mercadolibre.com/sites/MCO/search?category="+categoria+"&official_store_id=all";
    // var uri = "https://api.mercadolibre.com/sites/MCO/search?category=MCO1574&official_store_id=all";
    fetch(uri)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({items: responseJson.results});
    })
  }

  render() {
    return (
      <div>
      <h1>Items:</h1>
        {this.state.items.map(item =>{
          return <div>{item.title}</div>;
        })}
      </div>
    );
  }
}

export default BusquedaPorCategoria;

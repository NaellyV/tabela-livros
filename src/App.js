import React, { Component } from "react";
import TableHead from "./components/TabelaHead";
import TableBody from "./components/TabelaBody";
import TableFoot from "./components/TabelaFoot";

class App extends Component {
  state = {
    livros: []
  };

  componentDidMount() {
    fetch("/api/livros.json")
      .then((response) => response.json())
      .then((livros) => this.setState({ livros }))
      .catch((error) => {
        console.log("Erro na requisição", error);
      })
      .finally(() => {
        console.log("Sempre retorna");
      });
  }

  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter((l) => l.id !== id);
    this.setState({ livros });
  };

  handleSort = (column, order) => {
    const sortedLivros = [...this.state.livros].sort((a, b) => {
      if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    this.setState({ livros: sortedLivros });
  };

  render() {
    return (
      <table className="tabela">
        <TableHead onSort={this.handleSort} />
        <TableBody livros={this.state.livros} removerLinha={this.handleRemoverLinha} />
        <TableFoot qdeLivros={this.state.livros.length} />
      </table>
    );
  }
}

export default App;

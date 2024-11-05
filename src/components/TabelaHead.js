import React from "react";
import Setinhas from "./Setinhas";

const TableHead = ({ onSort }) => (
  <thead>
    <tr>
      <th colSpan="4">Tabela de Livros</th>
    </tr>
    <tr>
      <th>
        ISBN
        <Setinhas onSort={onSort} column="isbn" />
      </th>
      <th>
        Título
        <Setinhas onSort={onSort} column="titulo" />
      </th>
      <th>
        Autor
        <Setinhas onSort={onSort} column="autor" />
      </th>
      <th>Ações</th>
    </tr>
  </thead>
);

export default TableHead;

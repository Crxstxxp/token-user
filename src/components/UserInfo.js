import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";

const UserInfo = () => {

    const [data, setData] = useState({
        matricula: '',
        nombre: '',
        tipo: ''
    })

  function datosUser() {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/alumnos/data", {
          headers: {
            "x-access-token": token,
          },
        })
        .then((response) => {
          console.log(response.data);
          setData({
            matricula: response.data.resultado[0].matricula,
            nombre: response.data.resultado[0].nombre,
            tipo: response.data.resultado[0].tipo
          })
          
        });
    } else {
      console.log("No token");
    }

    return 0;
  }

  return (
    <>
      <Button onClick={datosUser}>Info</Button>
      <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Matricula</th>
            <th>Nombre</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {data.matricula} </td>
            <td> {data.nombre} </td>
            <td> {data.tipo} </td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </>
  );
};

export default UserInfo;

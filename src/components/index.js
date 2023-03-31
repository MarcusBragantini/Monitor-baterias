/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import firebaseDb from "../firebase";

const ListRecord = () => {
  const [sensores, setSensores] = useState([]);

  useEffect(() => {
     firebaseDb.child('/').on('value', (snapshot) => {
      const data = snapshot.val();
      const novoArraySensores = Object.keys(data).map((key) => {
        return {
          id: key,
          nome: data[key].nome,
          localizacao: data[key].localizacao,
          tensao: data[key].bat,
        };
      });
      setSensores(novoArraySensores);
    });
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div class="jumbotron">
              <h1 class="display-2">Monitor de baterias</h1>
            </div>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Tensão</th>
                </tr>
              </thead>
              <tbody>
                {sensores.map((bateria) => {
                  return (
                      <tr key={bateria.id}>
                        <th scope="row">{bateria.id}</th>
                        <td>{bateria.tensao} V</td>
                      </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;


import React, { useEffect, useRef} from 'react';
import axios from 'axios';
import {localHost} from './helpers';

// export const Connection = (url, method) => {
//   return fetch(`${localHost}${url}`, {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
//         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//       },
//      // body: JSON.stringify(body),
//     })
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       console.log('Datos obtenidos:', data);
//     })
//     .catch(error => {
//       console.error('Error en la solicitud:', error);
//     });
// }

function DataFetchingComponent(url, method) {
  const dataRef = useRef([]);


  useEffect(() => {
    axios.get(`${localHost}${url}`)
      .then(response => {
        dataRef.current = response.data;
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  }, []);

  return (
    dataRef.current
  );
}

export default DataFetchingComponent;



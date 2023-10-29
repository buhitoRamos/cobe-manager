
import React, { useEffect, useRef} from 'react';
import axios from 'axios';
import {localHost} from './helpers';


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



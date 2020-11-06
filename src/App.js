import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import ErrorMessage from './components/ErrorMessage'

function App() {

  // state del formulario

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const { ciudad, pais } = busqueda;

  const [Consultar, setConsultar] = useState(false);

  const [Resultado, setResultado] = useState({

  })

  const [Error, setError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (Consultar) {
        const appId = 'f0ce270a473832dd059594d5d1a4ecb2';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        //console.log(resultado);

        setResultado(resultado);
        setConsultar(false);

        // Detecta si hubo resultados correctos en la consulta

        if (resultado.cod === "404") {
          setError(true);
        } else { 
          setError(false);
        }

      }
    }

    consultarAPI();
    // eslint-disable-next-line
  }, [Consultar])

  let componente;

  if (Error) {
    componente = <ErrorMessage mensaje="No hay resultados"></ErrorMessage>
  } else { 
    componente = <Clima
                  resultado={Resultado}
                />
  }

  return (
    <Fragment>
      <Header
        titulo="Clima React App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

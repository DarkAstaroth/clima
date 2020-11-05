import React, { Fragment , useState, useEffect  } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // state del formulario

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const { ciudad, pais } = busqueda;

  const [Consultar, setConsultar] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => { 
      
    }
  }, [Consultar])

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
            <div className="col-m6 s12">
              2
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

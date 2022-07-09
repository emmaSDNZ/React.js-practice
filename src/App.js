import './App.css';
import Testimonio from './componentes/Testimonio.jsx'
import User from './componentes/Usuarios.js'
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros usuarios sobre nosotros </h1>
        {
            User.length === 0 ? <p><strong>no hay comentarios</strong></p>  : 
            User.map(e => {return(
                <Testimonio 
                    nombre = {e.nombre}
                    pais= {e.pais}
                    imagen= {e.imagen}
                    cargo= {e.cargo}
                    empresa= {e.empresa}
                    testimonio={e.testimonio}
                />
            )} )       
        }
      </div>
    </div>
  );
}

export default App;

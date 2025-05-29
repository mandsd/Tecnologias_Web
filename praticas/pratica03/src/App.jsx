import Home from './pages/Home.jsx';
import Perfil from './pages/Perfil.jsx';
import Login from './pages/Login.jsx';
function App() {
    const index = 3;
    return (
      <>
        {index == 1 && <Login />}
        {index == 2 && <Home />}
        {index == 3 && <Perfil />}
      </>
    );
  }

export default App;


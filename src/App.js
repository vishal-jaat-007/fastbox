import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Calculate } from './Components/Calculate';
import { Via_gps } from './Components/Via_gps';
import { Admsmith } from './Components/Admsmith';
import { Footer } from './Components/Footer';



function App() {
  return (
    <div>
      <Calculate />
      <Via_gps />
      <Admsmith />
      <Footer />


    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculate from './Components/Calculate';
import Via_gps from './Components/Via_gps';
import Admsmith from './Components/Admsmith';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Components/Mynav';
import Herosection from './Components/Herosection';
// import { Calculate } from './Components/Calculate';
import Airtable from './Components/Airtable';
import Fastbox from './Components/Fastbox';
import Booking from './Components/Booking';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Jeep from './Components/Jeep';
import Specialites from './Components/Specialites';
import Orderbox from './Components/Orderbox';
function App() {
  return (
    <div className=' overflow-hidden'>
      <Mynav />
      <Herosection />
      <Airtable />
      <Fastbox />
      <Booking />
      <Jeep />
      <Specialites />
      <Orderbox />
      <Calculate />
      <Via_gps />
      <Admsmith />
      <Footer />

    </div>
  );
}

export default App;

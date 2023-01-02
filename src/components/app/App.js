import Agency from '../agency/agency';
import Entrance from '../entrance/entrance';
import Footer from '../footer/footer';
import Line from '../line/line';
import Navbar from '../navbar/navbar';
import Portfolio from '../portfolio/portfolio';
import Resources from '../resources/resources';
import WorkTypes from '../workTypes/workTypes';
import './../app/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Entrance />
      <WorkTypes />
      <Line />
      <Agency />
      <Portfolio />
      <Line />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;

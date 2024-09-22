import './App.css'
import Restaurant from "./components/Restaurant/Restaurant.jsx";
import {restaurants} from "./mock.js";


const App = () => {
  return (
      <div>
        <Restaurant restaurant={restaurants[0]} />
        <Restaurant restaurant={restaurants[1]} />
        <Restaurant restaurant={restaurants[2]} />
        <Restaurant restaurant={restaurants[3]} />
      </div>
  );
};

export default App;

import './App.css'
import { restaurants } from "./mock.js";
import { Layout } from "./components/features/Layout/Layout.jsx";
import { Restaurant } from "./components/features/Restaurant/Restaurant.jsx";

const App = () => {
  return (
      <Layout>
          <div>
            <Restaurant restaurant={restaurants[0]} />
            <Restaurant restaurant={restaurants[1]} />
            <Restaurant restaurant={restaurants[2]} />
            <Restaurant restaurant={restaurants[3]} />
          </div>
      </Layout>
  );
};

export default App;

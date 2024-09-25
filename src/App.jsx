import { restaurants } from "./mock.js";
import { Layout } from "./components/features/Layout/Layout.jsx";
import { Restaurant } from "./components/features/Restaurant/Restaurant.jsx";
import { useState } from "react";

export const App = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <Layout>
            <div>
                <div className="tabs">
                    {restaurants.map((restaurant, index) => (
                        <button
                            key={restaurant.id}
                            className={activeRestaurantIndex === index ? 'active' : ''}
                            onClick={() => setActiveRestaurantIndex(index)}
                            disabled={activeRestaurantIndex === index}
                        >
                            {restaurant.name}
                        </button>
                    ))}
                </div>
                <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
            </div>
        </Layout>
    );
};

import { Dish } from "../../entities/Dish/Dish.jsx";
import { Review } from "../../entities/Review/Review.jsx";

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <h3>Меню</h3>
            {Boolean(restaurant.menu) &&
                <ul>
                    {restaurant.menu.map((dish) => (
                        <Dish key={dish.id} dish={dish}/>
                    ))}
                </ul>
            }

            <h3>Отзывы</h3>
            {Boolean(restaurant.reviews) &&
                <ul>
                    {restaurant.reviews.map((review) => (
                        <Review key={review.id} review={review}/>
                    ))}
                </ul>
            }
        </div>
    );
};

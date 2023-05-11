import { v4 as uuidv4 } from 'uuid';
import styles from './MealList.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: uuidv4(),
    name: 'Ролл "Наоми"',
    description:
      'Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут',
    price: 11.99,
  },
  {
    id: uuidv4(),
    name: 'Спайс в лососе',
    description: 'Рис, лосось, соус спайс',
    price: 3.99,
  },
  {
    id: uuidv4(),
    name: 'Суши с угрем',
    description: 'Угорь копченый, соус унаги, кунжут',
    price: 4.99,
  },
  {
    id: uuidv4(),
    name: 'Салат "Поке с лососем"',
    description:
      'Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый',
    price: 7.99,
  },
];
const MealList = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <MealItem
                name={meal.name}
                description={meal.description}
                price={meal.price}
                key={meal.id}
                id={meal.id}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default MealList;

import React from "react";
import styles from "./meals-grid.module.css";
import MealItem from "@/components/meals/meal-item";

export interface MealItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}
interface MealsGridProps {
  meals: MealItem[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;

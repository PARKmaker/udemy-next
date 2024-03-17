import React from "react";
import styles from "./meals-grid.module.css";
import { TMealItem } from "@/types/MealItem";
import MealItem from "@/components/meals/meal-item";

interface MealsGridProps {
  meals: TMealItem[];
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

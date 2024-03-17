import styles from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { TMealItem } from "@/types/MealItem";

type Props = {
  params: { mealSlug: string };
};

export default function MealDetailsPage({ params }: Props) {
  const meal = getMeal(params.mealSlug) as TMealItem;

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

MealDetailsPage;

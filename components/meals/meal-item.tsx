import React from "react";
import styles from "./meal-item.module.css";
import Link from "next/link";
import Image from "next/image";
import { MealItem } from "@/components/meals/meals-grid";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealItem) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}

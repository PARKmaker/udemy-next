import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          맛있는 밥, created <span className={styles.highlight}>by you</span>
        </h1>
        <p>당신이 제일 좋아하는 요리와 레시피를 선택하세요. 쉽고 간편합니다!</p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;

"use server";
import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

export async function shareMeals(formData: FormData) {
  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,

    // File 타입
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  if (!meal.image) {
    return;
  }

  await saveMeal(meal);
  redirect("/meals");
}

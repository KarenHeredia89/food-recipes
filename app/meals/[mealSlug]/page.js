import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal?.title,
    description: meal?.summary,
  };
}
export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className="animation-slide-left">
        <div className="relative w-[30rem] h-80">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="pl-2 py-4 pr-4 text-white animation-slide-right">
          <h1 className="text-white">{meal.title}</h1>
          <p className="text-2xl italic">
            by{" "}
            <a href={`mailto:${meal.creator_email}`} className="text-gradient">
              {meal.creator}
            </a>
          </p>
          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-xl rounded-lg shadow p-8 my-auto mx-8 animation-slide-bottom bg-stone-500"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

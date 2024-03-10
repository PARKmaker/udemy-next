import * as React from "react";

type Props = {
  params: { slug: string };
};

const MealDetailsPage: React.FC<Props> = ({ params }) => {
  return <h1>{params.slug}</h1>;
};

export default MealDetailsPage;

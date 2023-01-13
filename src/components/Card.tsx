import React from "react";

type Props = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

const Card = ({ icon, children }: Props) => {
  return (
    <section>
      <span>{icon}</span>
      {children}
    </section>
  );
};

export default Card;

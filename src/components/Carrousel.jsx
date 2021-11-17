import React, { useEffect, useState } from "react";

export const Carrousel = () => {
  const [count, setCount] = useState(1);
  let centinel = count;
  const handleClick = (a) => {
    centinel = centinel + a;
    if (centinel === 0) {
      centinel = 3;
    } else if (centinel === 4) {
      centinel = 1;
    }
    setCount(centinel);
  };
  useEffect(() => {
    setTimeout(() => {
      if (count === 3) {
        setCount(1);
      } else {
        setCount(centinel + 1);
      }
    }, 3500);
  }, [count, centinel]);
  return (
    <section className="carrousel">
      <img
        //src="./images/imagen1.jpg"
        src={`./images/imagen${count}.jpg`}
        alt="Imagen1"
        className="carrousel__img"
      />
      <i
        className="fas fa-chevron-left left"
        onClick={() => handleClick(-1)}
      ></i>
      <i
        className="fas fa-chevron-right right"
        onClick={() => handleClick(+1)}
      ></i>
    </section>
  );
};

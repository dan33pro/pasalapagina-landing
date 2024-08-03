import React, { useState } from "react";
import Discount from '@components/Discount';

import backgroundImage from '@images/backgroud-main.png';
const bgimage = `url(${backgroundImage.src})`;

const MainSection = () => {
  const [thereIsDiscount, setThereIsDiscount] = useState<boolean>(true);
  const handlerThereIsDiscount = (newState: boolean) =>
    setThereIsDiscount(newState);

  return (
    <main className="grid grid-cols-2 w-screen h-main">
      <aside className="bg-center bg-no-repeat bg-cover" style={{backgroundImage: bgimage}}>
        {thereIsDiscount && (
          <Discount />
        )}
      </aside>
      <aside>

      </aside>
    </main>
  );
};

export default MainSection;

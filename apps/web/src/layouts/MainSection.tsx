import React, { useState, useContext } from "react";
import AppContext from '@context/AppContext';
import Image from 'next/image';

import Discount from '@components/Discount';
import FormContainer from '@containers/FormContainer';

import personasImage from '@images/personajes@2x.png';
import backgroundImage from '@images/backgroud-main.png';

const MainSection = () => {
  const { state } = useContext(AppContext);

  const [thereIsDiscount, setThereIsDiscount] = useState<boolean>(false);
  const handlerThereIsDiscount = (newState: boolean) =>
    setThereIsDiscount(newState);

  return (
    <main className="grid grid-cols-2 w-screen h-main">
      <aside className="flex items-center justify-center bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${backgroundImage.src})`}}>
        {thereIsDiscount && <Discount />}
        {!thereIsDiscount && <Image className="w-[40vw] h-auto" src={personasImage} alt="Imagen Promocional - Tu edad, tu descuento" />}
      </aside>
      <aside>
        {(state.isRegister || state.isRegisterPhone || state.isRegisterEmail ||
          state.isLogin || state.isLoginPhone || state.isLoginEmail) && <FormContainer />}
      </aside>
    </main>
  );
};

export default MainSection;

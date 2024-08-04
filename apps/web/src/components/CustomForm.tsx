import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';

const CustomForm = () => {
    const { state, updateState } = useContext(AppContext);

    const handlerBtnMobile = () => {
        if (state.isLogin) updateState('isLoginPhone');
        if (state.isRegister) updateState('isRegisterPhone');
    };

    const handlerBtnEmail = () => {
        if (state.isLogin) updateState('isLoginEmail');
        if (state.isRegister) updateState('isRegisterEmail');
    };
    
  return (
    <article className="my-10 grid place-items-center">
        <div className="flex flex-col h-12 text-2xl text-center m-5 mb-7 text-[var(--ul-dark-grey)]">
            <AnimatePresence>
                {state.isLogin && (
                    <motion.span
                        key="login-text"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
                        exit={{ opacity: 0, y: 0, transition: { duration: 0.3, ease: "easeInOut" } }} >
                        Inicia Sesión
                    </motion.span>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {state.isRegister && (
                    <motion.span
                        key="register-text"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
                        exit={{ opacity: 0, y: -24, transition: { duration: 0.3, ease: "easeInOut" } }} >
                            Regístrate y continúa
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
        <form className="grid items-center grid-rows-3" onSubmit={(e) => e.preventDefault()}>
            <button
                onClick={handlerBtnMobile}
                className=" flex items-center justify-center h-14 w-72 bg-[var(--light-blue)]
                            text-[var(--white-color)] rounded-[28px] border border-[var(--grey)]
                            hover:bg-[var(--ul-light-gray)] hover:text-[var(--ul-dark-grey)]
                            hover:border-[var(--dark-grey)]">Con tu celular</button>
            <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-x-2">
                <div className="h-px bg-black ml-6"></div>
                <div className="text-xl flex items-center justify-center">o</div>
                <div className="h-px bg-black mr-6"></div>
            </div> 
            <button
                onClick={handlerBtnEmail}
                className=" flex items-center justify-center h-14 w-72 bg-[var(--ul-light-gray)]
                            text-[var(--ul-dark-grey)] rounded-[28px] border border-[var(--dark-grey)]
                            hover:bg-[var(--light-blue)] hover:text-[var(--white-color)]
                            hover:border-[var(--grey)]">Con tu email</button>
        </form>
    </article>
  );
};

export default CustomForm;
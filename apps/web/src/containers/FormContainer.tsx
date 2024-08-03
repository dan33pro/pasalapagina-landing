import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';

import CustomForm from '@components/CustomForm';
import MobileNext from '@components/MobileNext';
import EmailNext from '@components/EmailNext';

const FormContainer = () => {
  const { state, updateState } = useContext(AppContext);

  return (
    <section className="h-main flex items-center justify-center flex-col gap-y-10">
        <h2 className=" text-2xl text-center text-[var(--ul-dark-grey)] pt-3.5 px-7 pb-7
                        border-b border-[var(--border-color)]">
          Cientos de revistas para <br />leer y escuchar en nuestro <br /> Kiosco Digital
        </h2>
        {(state.isRegister || state.isLogin) && <CustomForm />}
        {(state.isRegisterPhone || state.isLoginPhone) && <MobileNext />}
        {(state.isRegisterEmail || state.isLoginEmail) && <EmailNext />}
        <div className="mt-9 h-14 mb-7 flex flex-col">
          <AnimatePresence>
            {(state.isLogin || state.isLoginPhone || state.isLoginEmail) && (
              <motion.button
                key="register"
                onClick={() => updateState('isRegister')}
                className="text-lg font-medium"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
                exit={{ opacity: 0, y: 0, transition: { duration: 0.3, ease: "easeInOut" } }} >
                  ¿Aún no tienes una cuenta?
                <span className="ml-2 text-[var(--light-blue)] underline">Regístrate</span>
              </motion.button>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {(state.isRegister || state.isRegisterPhone || state.isRegisterEmail) && (
              <motion.button
                key="login"
                onClick={() => updateState('isLogin')}
                className="text-lg font-medium text-[var(--light-blue)] underline"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
                exit={{ opacity: 0, y: -28, transition: { duration: 0.3, ease: "easeInOut" } }} >
                  Ya tengo una cuenta
              </motion.button>
            )}
          </AnimatePresence>
        </div>
    </section>
  );
};

export default FormContainer;
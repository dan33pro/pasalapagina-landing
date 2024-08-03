"use client";
import AppContext from '@context/AppContext';
import useAppState from '@hooks/useAppState';

import Nav from "@components/Nav";
import MainSection from '@layouts/MainSection';

export default function Web() {
  const appState = useAppState();

  return (
    <AppContext.Provider value={appState}>
      <main>
        <Nav />
        <MainSection />
      </main>
    </AppContext.Provider>
  );
}

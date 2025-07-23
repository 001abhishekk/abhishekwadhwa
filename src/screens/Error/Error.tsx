import React from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { NavigationSection } from "./sections/NavigationSection";

export const Error = (): JSX.Element => {
  return (
    <main className="bg-white flex flex-row min-h-screen w-full">
      <NavigationSection />
      <HeaderSection />
    </main>
  );
};

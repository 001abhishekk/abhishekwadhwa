import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const HeaderSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative flex-1 grow">
      <header className="flex h-[73px] items-center justify-between px-[26px] py-4 relative self-stretch w-full bg-theme-colorwhite shadow-[0px_0px_40px_#1d3a5326]">
        <div className="flex items-center gap-2 px-[9px] py-2 relative bg-[#9a9ea41a] rounded-[5.2px] w-[234px]">
          <Input
            className="border-0 bg-transparent p-0 h-auto text-theme-colorbody font-body-body-text text-[length:var(--body-body-text-font-size)] tracking-[var(--body-body-text-letter-spacing)] leading-[var(--body-body-text-line-height)] placeholder:text-theme-colorbody focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search"
          />
          <SearchIcon className="h-5 w-5 text-theme-colorprimary" />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center p-3 bg-[#dddee0] rounded-[50px]">
            <img
              className="w-[15px] h-[15px]"
              alt="Vector"
              src="/vector-3.svg"
            />
            <div className="absolute w-2.5 h-2.5 top-px right-0 translate-x-1/2 bg-theme-colordanger rounded-[5px]" />
          </div>

          <div className="w-10 h-10 rounded-full bg-[url(/ellipse-1.png)] bg-cover bg-[50%_50%]" />
        </div>
      </header>

      <main className="flex flex-col items-start p-6 relative flex-1 grow w-full">
        <Card className="flex flex-col w-full items-center gap-[26px] p-6 relative flex-1 grow border border-solid border-[#74757940] shadow-[0px_0px_48px_#1d3a5326]">
          <CardContent className="flex flex-col items-center p-0 w-full">
            <img
              className="w-auto max-w-[669px] h-auto max-h-[400px]"
              alt="Error illustration"
              src="/image.svg"
            />

            <div className="flex flex-col items-center mt-[26px]">
              <h1 className="font-display-text-display-1 font-[number:var(--display-text-display-1-font-weight)] text-theme-colordanger text-[length:var(--display-text-display-1-font-size)] text-center tracking-[var(--display-text-display-1-letter-spacing)] leading-[var(--display-text-display-1-line-height)] [font-style:var(--display-text-display-1-font-style)]">
                404
              </h1>

              <div className="flex flex-col items-center gap-2">
                <h2 className="[font-family:'Heebo',Helvetica] font-bold text-theme-colordark text-[37.5px] text-center tracking-[0] leading-[46.9px]">
                  Oh no, something went wrong!
                </h2>

                <div className="flex flex-col items-center gap-[26px]">
                  <p className="font-body-body-text font-[number:var(--body-body-text-font-weight)] text-theme-colorbody text-[length:var(--body-body-text-font-size)] text-center tracking-[var(--body-body-text-letter-spacing)] leading-[var(--body-body-text-line-height)] [font-style:var(--body-body-text-font-style)]">
                    Either something went wrong or this page doesn&#39;t exist
                    anymore.
                  </p>

                  <Button className="bg-theme-colorprimary text-theme-colorwhite font-medium px-4 py-2 rounded-[5.2px] h-[39px] w-[153px]">
                    Go to Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

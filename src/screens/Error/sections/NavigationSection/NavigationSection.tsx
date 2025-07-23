import {
  ChevronDownIcon,
  DollarSignIcon,
  FileTextIcon,
  GitBranchIcon,
  LayoutDashboardIcon,
  LockIcon,
  SettingsIcon,
  StarIcon,
  UserCheckIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { ScrollArea } from "../../../../components/ui/scroll-area";

// Navigation items data for main menu
const navigationItems = [
  {
    icon: <LayoutDashboardIcon size={18} className="text-theme-colorprimary" />,
    label: "Dashboard",
    color: "text-theme-colorprimary",
  },
  {
    label: "Pages",
    isHeader: true,
  },
  {
    icon: (
      <img className="w-[18px] h-[17px]" alt="Vector" src="/vector-2.svg" />
    ),
    label: "Courses",
    hasDropdown: true,
    color: "text-theme-colorwhite",
  },
  {
    icon: <UsersIcon size={18} className="text-theme-colorwhite" />,
    label: "Students",
    color: "text-theme-colorwhite",
  },
  {
    icon: <UserCheckIcon size={18} className="text-theme-colorprimary" />,
    label: "Instructors",
    hasDropdown: true,
    color: "text-theme-colorprimary",
  },
  {
    icon: <StarIcon size={18} className="text-theme-colorwhite" />,
    label: "Reviews",
    color: "text-theme-colorwhite",
  },
  {
    icon: <DollarSignIcon size={18} className="text-theme-colorwhite" />,
    label: "Earnings",
    color: "text-theme-colorwhite",
  },
  {
    icon: <SettingsIcon size={18} className="text-theme-colorwhite" />,
    label: "Admin Settings",
    color: "text-theme-colorwhite",
  },
];

// Authentication submenu items
const authItems = [
  { label: "Sign Up", color: "text-theme-colorwhite" },
  { label: "Sign In", color: "text-white" },
  { label: "Forgot Password", color: "text-white" },
  { label: "Error 404", color: "text-theme-colorprimary", isActive: true },
];

// Documentation items
const docItems = [
  {
    label: "Documentation",
    isHeader: true,
  },
  {
    icon: <FileTextIcon size={18} className="text-theme-colorwhite" />,
    label: "Documentation",
    color: "text-theme-colorwhite",
  },
  {
    icon: <GitBranchIcon size={18} className="text-theme-colorwhite" />,
    label: "Changelog",
    color: "text-theme-colorwhite",
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <div className="flex flex-col h-[921px] bg-theme-colordark">
      <div className="flex flex-col items-start p-5 w-full">
        <img
          className="w-[172px] h-9"
          alt="Logo light"
          src="/logo-light-2.svg"
        />
      </div>

      <ScrollArea className="h-[836px] px-2.5 pb-4">
        <div className="flex flex-col items-start">
          {/* Main navigation items */}
          {navigationItems.map((item, index) =>
            item.isHeader ? (
              <div key={`header-${index}`} className="w-[228px] px-2 py-2">
                <span className="font-body-nav-text text-theme-colorbody text-[15px] leading-[125%]">
                  {item.label}
                </span>
              </div>
            ) : (
              <Button
                key={`nav-${index}`}
                variant="ghost"
                className={`w-[228px] h-12 justify-start gap-2 px-4 py-2 ${item.label === "Instructors" ? "rounded-[5px]" : ""}`}
              >
                {item.icon}
                <span
                  className={`flex-1 font-body-nav-text text-[15px] leading-[125%] ${item.color}`}
                >
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronDownIcon size={11} className={item.color} />
                )}
              </Button>
            ),
          )}

          {/* Authentication section */}
          <Accordion type="single" collapsible className="w-[228px]">
            <AccordionItem value="authentication" className="border-0">
              <AccordionTrigger className="bg-soft-colorprimary h-12 px-4 py-2 rounded-[5px] no-underline">
                <div className="flex items-center gap-2">
                  <LockIcon size={18} className="text-theme-colorprimary" />
                  <span className="font-body-nav-text text-theme-colorprimary text-[15px] leading-[125%]">
                    Authentication
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  {authItems.map((item, index) => (
                    <Button
                      key={`auth-${index}`}
                      variant="ghost"
                      className={`w-[228px] h-10 justify-start pl-10 pr-2.5 py-2 ${item.isActive ? "bg-transparent" : ""}`}
                    >
                      <span
                        className={`font-body-nav-text text-[15px] leading-[125%] ${item.color}`}
                      >
                        {item.label}
                      </span>
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Documentation section */}
          {docItems.map((item, index) =>
            item.isHeader ? (
              <div key={`doc-header-${index}`} className="w-[228px] px-2 py-2">
                <span className="font-body-nav-text text-theme-colorbody text-[15px] leading-[125%]">
                  {item.label}
                </span>
              </div>
            ) : (
              <Button
                key={`doc-${index}`}
                variant="ghost"
                className="w-[228px] h-12 justify-start gap-2 px-4 py-2"
              >
                {item.icon}
                <span
                  className={`flex-1 font-body-nav-text text-[15px] leading-[125%] ${item.color}`}
                >
                  {item.label}
                </span>
              </Button>
            ),
          )}
        </div>

        <div className="flex justify-center mt-4">
          <img className="w-48" alt="Slide bar" src="/slide-bar.svg" />
        </div>
      </ScrollArea>
    </div>
  );
};

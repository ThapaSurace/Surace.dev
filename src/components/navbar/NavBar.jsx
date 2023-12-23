import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navlist from "./Navlist";
import DarkModeToggle from "../DarkModeToggle";


const NavBar = () => {
  
  const [openNav, setOpenNav] = React.useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
   <div className="sticky top-0 z-50 dark:bg-dark-background">
     <Navbar className="mx-auto max-w-screen-xl px-6 py-3 bg-white dark:bg-dark-background border-none shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 dark:text-white"
        >
          Surace.dev
        </Typography>
        <div className="hidden lg:block">
         <Navlist />
        </div>
       
      <div className="flex gap-4 items-center">
      <DarkModeToggle />
      <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 dark:text-white" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 dark:text-white" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      </div>
      <Collapse open={openNav}>
       <Navlist />
      </Collapse>
    </Navbar>
   </div>
  );
};

export default NavBar;

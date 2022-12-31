import {
  BiHome,
  BiCategory,
  BiFile,
  BiTable,
  BiMessageRoundedError,
} from "react-icons/bi";
export const NavData = [
  {
    icon: <BiHome className="w-full h-full" />,
    title: "Home",
    path: "/Home",
  },

  {
    icon: <BiFile className="w-full h-full" />,
    title: "Form",
    path: "/Form",
  },

  {
    icon: <BiMessageRoundedError className="w-full h-full" />,
    title: "About",
    path: "/About",
  },
];

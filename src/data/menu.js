import { HiOutlineHome, HiOutlineCog, HiSearch } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import {
  MdOutlineAccountCircle,
  MdHelpOutline,
  MdOutlineFeedback,
} from "react-icons/md";
import { RiAdminLine, RiWindyFill } from "react-icons/ri";


export const menuOptions = [
  { name: "Home", to: "/courses", Icon: HiOutlineHome },
  { name: "Admin", to: "/admin", Icon: RiAdminLine },
  { name: "Accounts", to: "/dashboard/accounts", Icon: MdOutlineAccountCircle },
  { name: "Reports", to: "/dashboard/reports", Icon: TbReportAnalytics },
  { name: "Flows", to: "/dashboard/flows", Icon: RiWindyFill },
];
export const menuOptionsTwo = [
  { name: "Settings", to: "/courses", Icon: HiOutlineCog },
  { name: "Get Help", to: "/courses", Icon: MdHelpOutline },
  { name: "Submit feedback", to: "/courses", Icon: MdOutlineFeedback },
];
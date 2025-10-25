import { sidebarAtom } from "@/atom/GeneralAtom";
import Sidebar from "../components/home/Sidebar";
import { useAtomValue } from "jotai";
import Climbing from "@/components/home/Climbing";
import Calendar from "@/components/home/Calendar";
import Money from "@/components/home/Money";
import Urgent from "@/components/home/Urgent";
import Credentials from "@/components/home/Credentials";

const Home = () => {
  const sidebar = useAtomValue<string>(sidebarAtom);

  return (
    <div className="flex bg-black w-screen h-screen">
      {sidebar === "climbing" && (
        <Climbing />
      )}
      {sidebar === "schedule" && (
        <Calendar />
      )}
      {sidebar === "money" && (
        <Money />
      )}
      {sidebar === "urgent" && (
        <Urgent />
      )}
       {sidebar === "credentials" && (
        <Credentials />
      )}
      <Sidebar />
    </div>
  );
};

export default Home;

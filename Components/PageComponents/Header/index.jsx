import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import pfl from "../../Resorcess/1.png";
const Index = ({ Headline }) => {
  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false);

  let showDate = new Date();
  let TodayTime = showDate.getMonth() + 1 + "/" + showDate.getDate()+'/'+showDate.getFullYear();
  let displayTime = showDate.getHours() + ":" + showDate.getMinutes();
  const Login = () => {
    return setShowMenu(true);
  };
  const Profile = () => {
    return setShowProfile(!showProfile);
  };
  return (
    <div>
      <div className="bg-background flex justify-between items-center px-4">
        <h1 className="text-xl font-medium title-font p-4 bg-background text-Headline">
          {Headline}
        </h1>
        <div className="flex gap-8 items-center text-Headline font-medium">
          <div className="flex flex-col">
            <div>{TodayTime}</div>
            <div>{displayTime} Hrs</div>
          </div>
          <div onClick={Profile}>
            <Link
              href="/Logout"
              className="flex items-center cursor-pointer gap-4 text-Headline text-lg font-medium"
            >
              <div>
                <Image src={pfl} className="w-10 h-10 rounded-full" alt="" />
              </div>
              <div>Log out</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="ml-16 text-lg">{router.pathname}</div>
    </div>
  );
};

export default Index;

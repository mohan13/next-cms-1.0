import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
const Index = ({ Path, Icon, Title }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Link href={Path} passHref>
      <div
        className={`px-8  cursor-pointer flex gap-2 text-Headline items-center ${
          router.pathname === Path
            ? "bg-gray-600 py-1"
            : "hover:text-gray-400 py-1"
        }`}
      >
        <div className="w-6 h-6">{Icon}</div>
        <div className="hidden md:block font-semibold">{Title}</div>
      </div>
    </Link>
  );
};

export default Index;

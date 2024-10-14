"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

export default function RedirectToApp({}) {
  const router = useRouter();
  useEffect(() => {
    router.replace(
      "https://apps.apple.com/us/app/expect-chat/id6736864534?platform=iphone"
    );
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <RotatingLines
        visible={true}
        height="40"
        width="40"
        color="blue"
        strokeColor="#d1d5db"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

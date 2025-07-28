"use client";

import { useSession, signIn } from "next-auth/react";
import Splash from "./_components/Splash";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GuardianHome from "./_components/home/GuardianHome";
import PatientHome from "./_components/home/PatientHome";

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (status === "loading" || isLoading) return <Splash />;

  return (
    <div>
      {status === "authenticated" ? (
        <>
          {/* {session?.user?.type === "guardian" && <GuardianHome />}
          {session?.user?.type === "patient" && <PatientHome />} */}
        </>
      ) : (
        <div className="flex flex-col">
          <button onClick={() => router.push("/auth")}>휴대폰 번호로 시작하기</button>
          <button onClick={() => signIn("kakao")}>카카오로 시작하기</button>
          <button onClick={() => signIn("naver")}>네이버로 시작하기</button>
          <button onClick={() => signIn("google")}>구글로 시작하기</button>
        </div>
      )}
    </div>
  );
}

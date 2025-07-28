"use client";

import { useRouter } from "next/navigation";

export default function GuardianHome() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/story")}>스토리 생성</button>
      <button onClick={() => router.push("/contents")}>맞춤 콘텐츠 생성</button>
      <button onClick={() => router.push("/album")}>회고 앨범 관리</button>
    </div>
  );
}

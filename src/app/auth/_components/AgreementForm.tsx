"use client";

import { useState } from "react";

export default function AgreementForm() {
  const [allChecked, setAllChecked] = useState(false);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  // 모두 동의 토글
  const toggleAll = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setAgreements({
      terms: newValue,
      privacy: newValue,
      marketing: newValue,
    });
  };

  // 개별 항목 토글
  const toggleOne = (key: keyof typeof agreements) => {
    const newAgreements = { ...agreements, [key]: !agreements[key] };
    setAgreements(newAgreements);

    // 모두 체크되었는지 확인
    const allCheckedNow = Object.values(newAgreements).every(Boolean);
    setAllChecked(allCheckedNow);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">
        브랜드(네임)
        <br />
        서비스 이용에 동의해주세요
      </h1>

      <div className="mt-6 border rounded-md p-3 bg-gray-100">
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={allChecked} onChange={toggleAll} />
          <span className="font-semibold">필수 약관 모두 동의</span>
        </label>
      </div>

      <div className="mt-4 space-y-3">
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={agreements.terms} onChange={() => toggleOne("terms")} />
          <span>(필수) 브랜드 네임 이용약관</span>
        </label>

        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={agreements.privacy} onChange={() => toggleOne("privacy")} />
          <span>(필수) 개인정보 수집 및 이용 동의</span>
        </label>

        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={agreements.marketing} onChange={() => toggleOne("marketing")} />
          <span>(필수) 마케팅 정보 수신 동의</span>
        </label>
      </div>

      <button disabled={!allChecked} className={`w-full mt-6 py-3 rounded-md ${allChecked ? "bg-black text-white" : "bg-gray-300 text-gray-600"}`}>
        동의
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import NameForm from "./_components/NameForm";
import ResiderNumberForm from "./_components/ResiderNumberForm";
import PhoneAuthForm from "./_components/PhoneAuthForm";
import AgreementForm from "./_components/AgreementForm";
import TelecomForm from "./_components/TelecomForm";
import VerifyForm from "./_components/VerifyForm";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col gap-6">
      {/* 5. 인증 번호 */}
      {step < 6 && step > 4 && <VerifyForm />}
      {/* 4. 휴대폰 번호 */}
      {step < 6 && step > 3 && <PhoneAuthForm goNext={() => setStep((prev) => prev + 1)} />}
      {/* 3. 통신사 */}
      {step < 6 && step > 2 && <TelecomForm />}
      {/* 2. 주민등록번호 */}
      {step < 6 && step > 1 && <ResiderNumberForm />}
      {/* 1. 이름 */}
      {step < 6 && step < 3 && <NameForm />}
      {/* 6. 서비스 동의 */}
      {step === 6 && <AgreementForm />}

      {/* 버튼 */}
      {step < 6 && (
        <button className="outline outline-black" type="button" onClick={() => setStep((prev) => prev + 1)}>
          다음
        </button>
      )}
    </div>
  );
}

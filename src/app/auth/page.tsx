"use client";

import { useEffect, useState } from "react";
import NameForm from "./_components/NameForm";
import ResiderNumberForm from "./_components/ResiderNumberForm";
import PhoneAuthForm from "./_components/PhoneAuthForm";
import AgreementForm from "./_components/AgreementForm";
import TelecomForm from "./_components/TelecomForm";
import VerifyForm from "./_components/VerifyForm";
import useVerifyPhone from "@/hooks/auth/useVerifyPhone";
import { FormProvider, useForm } from "react-hook-form";
import useVerifyAuth from "@/hooks/auth/useVerifyAuth";

export default function Page() {
  const [step, setStep] = useState(1);
  const { mutate: verifyPhone } = useVerifyPhone();
  const { mutate: verifyAuth } = useVerifyAuth();
  const methods = useForm();
  const { getValues } = methods;

  const sendCertificationNumber = () => {
    const receiver = getValues("receiver");
    if (!receiver || receiver.length !== 11) return;

    verifyPhone(receiver, {
      onSuccess() {
        setStep(5);
      },
    });
  };

  const goNext = () => {
    if (step === 5) {
      const code = getValues("code");
      const phoneNum = getValues("receiver");
      verifyAuth(
        { code, phoneNum },
        {
          onSuccess(data) {
            if (data) {
              setStep((prev) => prev + 1);
            }
          },
        }
      );
    } else setStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (step === 5) {
      sendCertificationNumber();
    }
  }, [step]);

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-6">
        {/* 5. 인증 번호 */}
        {step < 6 && step > 4 && <VerifyForm />}
        {/* 4. 휴대폰 번호 */}
        {step < 6 && step > 3 && <PhoneAuthForm showResend={step === 5} resend={sendCertificationNumber} />}
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
          <button className="outline outline-black" type="button" onClick={goNext}>
            다음
          </button>
        )}
      </div>
    </FormProvider>
  );
}

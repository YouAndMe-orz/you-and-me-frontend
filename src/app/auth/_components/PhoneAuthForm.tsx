"use client";

import { useFormContext } from "react-hook-form";

interface IPhoneAuthForm {
  showResend: boolean;
  resend: () => void;
}

export default function PhoneAuthForm({ showResend, resend }: IPhoneAuthForm) {
  const { register, setValue } = useFormContext();

  return (
    <div>
      <div>
        <input
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={11}
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
          }}
          {...register("receiver", { required: true, pattern: /^\d{11}$/ })}
        />
        <button onClick={() => setValue("phone", "")}>x</button>
      </div>

      {showResend && (
        <button className="border border-black" onClick={resend}>
          재전송
        </button>
      )}
    </div>
  );
}

"use client";

import { useForm } from "react-hook-form";

interface IPhoneAuthForm {
  goNext: () => void;
}

export default function PhoneAuthForm({ goNext }: IPhoneAuthForm) {
  const { register, setValue } = useForm();

  return (
    <div>
      <div>
        <input
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={10}
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
          }}
          {...register("phone", { required: true, pattern: /^\d{10}$/ })}
        />
        <button onClick={() => setValue("phone", "")}>x</button>
      </div>

      <button className="border border-black" onClick={goNext}>
        재전송
      </button>
    </div>
  );
}

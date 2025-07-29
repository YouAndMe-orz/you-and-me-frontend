"use client";

import { useFormContext } from "react-hook-form";

export default function VerifyForm() {
  const { register } = useFormContext();

  return (
    <div>
      인증번호
      <input type="text" {...register("code", { required: true })} />
    </div>
  );
}

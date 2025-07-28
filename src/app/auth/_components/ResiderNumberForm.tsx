"use client";

import { useForm } from "react-hook-form";

export default function ResiderNumberForm() {
  const { register } = useForm();

  return (
    <div className="relative">
      resident number
      <input
        className="absolute"
        type="text"
        onInput={(e) => {
          e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
        }}
        {...register("residentNumber", { required: true, pattern: /^\d{7}$/ })}
        maxLength={7}
      />
    </div>
  );
}

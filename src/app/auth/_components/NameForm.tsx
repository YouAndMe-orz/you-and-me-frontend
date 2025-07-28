"use client";

import { useForm } from "react-hook-form";

export default function NameForm() {
  const { register } = useForm();

  return (
    <div>
      name
      <input {...register("name")} type="text" />
    </div>
  );
}

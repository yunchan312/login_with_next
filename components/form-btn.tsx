"use client";

import { useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="h-10 disabled:bg-neutral-400 disabled:cursor-not-allowed font-bold text-center w-full rounded-full hover:bg-lightPink bg-pink"
    >
      {pending ? "Loading..." : "Log in"}
    </button>
  );
}

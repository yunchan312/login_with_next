"use client";
import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";
import { FaFireFlameCurved } from "react-icons/fa6";
import handleForm from "./action";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Home() {
  const [state, action] = useFormState(handleForm, {
    isSuccess: true,
    username: null,
  });
  return (
    <main className="flex flex-col items-center justify-center py-10 h-screen">
      <form
        action={action}
        className="w-full px-10 h-[70%] flex flex-col gap-5 justify-center items-center"
      >
        <FaFireFlameCurved className="text-[60px] text-[#f5a6b9]" />
        <FormInput
          type="email"
          required={true}
          isSuccess={true}
          placeholder="Email"
          name="email"
          icon="email"
        />
        <FormInput
          type="text"
          isSuccess={true}
          required={true}
          placeholder="Username"
          name="username"
          icon="username"
        />
        <FormInput
          type="password"
          required={true}
          isSuccess={state.isSuccess}
          placeholder="Password"
          name="password"
          icon="password"
        />
        <FormButton />
        {state.isSuccess ? (
          <div className="flex gap-3 items-center justify-center bg-green-600 w-full h-14 rounded-xl">
            <span>
              <FaRegCheckCircle />
            </span>
            <div>Welcome Back, {state?.username}!!</div>
          </div>
        ) : null}
      </form>
    </main>
  );
}

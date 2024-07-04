"use server";

export default async function handleForm(prevData: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const username = formData.get("username");
  if (formData.get("password") === "12345") {
    return { isSuccess: true, username: username };
  } else {
    return { isSuccess: false, username: null };
  }
}

interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  isSuccess?: boolean;
  name: string;
  icon: string;
}
import { FaKey } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const selectIcon = (icon: string) => {
  if (icon === "username") {
    return <FaUserAstronaut />;
  } else if (icon === "email") {
    return <MdEmail />;
  } else {
    return <FaKey />;
  }
};

export default function FormInput({
  type,
  placeholder,
  required,
  name,
  icon,
  isSuccess,
}: FormInputProps) {
  return (
    <div className="w-full">
      <div className="flex">
        <span className="absolute text-pink text-xl pl-3 py-2">
          {selectIcon(icon)}
        </span>
        <input
          className="border-none focus:ring-4 font-semibold text-black focus:ring-pink transition focus:outline-none focus:border-none w-full h-10 rounded-full px-10"
          required={required}
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </div>

      {isSuccess ? null : (
        <div className="text-md font-light text-red-500">Wrong Password</div>
      )}
    </div>
  );
}

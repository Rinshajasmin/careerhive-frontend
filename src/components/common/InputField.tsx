import type {LucideIcon} from "lucide-react"; 

type InputFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  icon: LucideIcon;
};

const InputField = ({
  id,
  label,
  placeholder,
  type = "text",
  icon: Icon,
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-1.5 text-xs text-gray-600"
      >
        {label}
      </label>

      <div className="relative">
        <Icon
          size={15}
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="
            w-full
            h-11
            pl-9
            pr-3
            rounded-full
            border
            border-gray-400
            text-xs
            outline-none
            focus:border-[#FF7A18]
            focus:ring-1
            focus:ring-[#FF7A18]/20
            transition-all
          "
        />
      </div>
    </div>
  );
};

export default InputField;
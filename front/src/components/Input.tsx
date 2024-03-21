import React from "react";

type InputProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  onClickHandler: () => void;
  disabled: boolean;
};

export default function Input({
  userName,
  setUserName,
  onClickHandler,
  disabled,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <form className="flex flex-col justify-center items-center relative h-full w-full">
      <input
        data-testid="input"
        name="userName"
        value={userName}
        onChange={handleChange}
        type="text"
        placeholder="Name"
        required={true}
        className=" w-3/4 placeholder:text-black placeholder:translate-x-2 placeholder:font-semibold placeholder:font-secondary p-2 h-[50px] border-2 border-black  bg-transparent outline-none shadow-[5px_5px_0px_0px_#0B2447] transition-all duration-200 focus:shadow-none focus:transition-all focus:duration-500 md:lg:text-lg"
      />
      <button
      type="submit"
        data-testid="button"
        disabled={disabled}
        onClick={onClickHandler}
        className="disabled:text-gray-400 mt-4  active:bg-accent border-2 border-black  h-[50px] w-3/4 cursor-pointer tracking-wider bg-callAction text-base font-secondary font-semibold shadow-[5px_5px_0px_0px_#0B2447] focus:transition-all focus:duration-200 focus:shadow-none focus:border-b-2 "
      >
        Join Chat
      </button>
    </form>
  );
}

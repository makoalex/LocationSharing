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
    <div className="flex flex-col justify-center items-start relative h-full w-2/3">
      <input
        data-testid="input"
        name="userName"
        value={userName}
        onChange={handleChange}
        type="text"
        placeholder="Name"
        required={true}
        className="mt-5 w-full placeholder:text-black placeholder:translate-x-2 placeholder:font-bold placeholder:font-secondary p-2 h-[50px] border-2 border-black  bg-transparent outline-none shadow-[7px_7px_0px_0px_#0B2447] transition-all duration-300 focus:shadow-none focus:transition-all focus:duration-500 md: lg:text-lg"
      />
      <button
      type="submit"
        data-testid="button"
        disabled={disabled}
        onClick={onClickHandler}
        className="disabled:text-gray-400 mt-6  border-2 border-b-4 border-black  h-[45px] w-2/4 cursor-pointer bg-callAction text-lg font-secondary font-medium shadow-[2px_2px_1px_0px_#0B2447] focus:transition-all focus:duration-300 focus:shadow-none focus:border-b-2 "
      >
        Join Chat
      </button>
    </div>
  );
}

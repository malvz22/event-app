import Link from 'next/link';

type buttonProps = {
  type: 'button' | 'submit';
  title: string;
};

const Button = ({ type, title }: buttonProps) => {
  return (
    <div>
      <button
        className="border-none bg-[#7848F4] p-2 px-[2rem] text-white text-[1.2rem] rounded-md cursor-pointer hover:shadow-md hover:bg-[#6039c3]"
        type={type}
      >
        <label>{title}</label>
      </button>
    </div>
  );
};

export default Button;

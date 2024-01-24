import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between py-6 max-w-[1200px] m-auto">
        <Link href={'/'}>
          <div className="flex justify-center items-center font-bold text-[40px] cursor-pointer">
            Event <span className="text-[#7848F4]">Horizon</span>
          </div>
        </Link>

        <div className="flex flex-row gap-[50px]">
          <Link href={'/login'}>
            <button className="px-10 py-4">Login</button>
          </Link>

          <Link href={'/registration'}>
            <button className="text-white bg-[#7848F4] px-10 py-4 rounded-lg">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

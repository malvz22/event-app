export const Header = () => {
  return(
    <>
      <div className="flex flex-row justify-between py-6 max-w-[1200px] m-auto">
        <div className="flex justify-center items-center font-bold text-[40px] ">
          Event <span className="text-[#7848F4]">Horizon</span>
        </div>
        <div className="flex flex-row gap-[50px]">
          <button>Login</button>
          <button className="text-white bg-[#7848F4] px-10 py-4 rounded-lg">Sign Up</button>
        </div>
      </div>
    </>
  ); 
};

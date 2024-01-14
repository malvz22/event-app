export default function RegisterPage() {
    return(
        <>
            <div className="flex flex-col">
                <div className="flex justify-center items-center font-bold text-[24px]">
                    Event <span className="text-[#7848F4]">Horizon</span>
                </div>

                <h1 className="text-center font-bold text-[36px]">Sign Up to Event Horizon</h1>
                
                <form action="" className="max-w-lg mx-auto">
                    <div className="mb-5">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Enter your username" required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Enter your email" required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Enter your password" required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                        <input type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Confirm your password" required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="referalCode" className="block mb-2 text-sm font-medium text-gray-900">Referal Code (If Any)</label>
                        <input type="text" id="referalCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Enter referal code" required/>
                    </div>
                    <button type="submit" className="text-white bg-[#7848F4] font-medium rounded-lg text-sm w-64 h-10 text-center">Sign Up</button>
                </form>

            </div>
        </>
    );
}
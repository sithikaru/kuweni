import { HiMenu } from "react-icons/hi";

function Nav() {
    return (
        <div className="flex top-0">
        <img src="Kuweni Musical Logo.svg" loading="lazy" alt="logo" class="w-24 m-6 mb-3 l-0 ml-14 cursor-pointer"/>
        <div className="ml-auto text-[12px] font-medium text-gray-200 flex flex-row gap-16 my-auto mr-14 uppercase">
            <p className="pt-2.5">About</p>
            <p className="pt-2.5">Venue</p>
            <p className="pt-2.5">Terms & Conditions</p>
            <p className="bg-white font-bold text-black px-5 py-2 rounded-md">Merchandise</p>
        </div>
        <HiMenu className="text-white hidden cursor-pointer my-auto mx-6 w-10 h-10 mt-4 absolute right-0"/>
    </div>
    
    );
  }
  
  export default Nav;
  
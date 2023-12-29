function Header() {
  return (
    <div className="relative h-screen mt-[10%] flex justify-center items-center">
     
        <img src="KTM logo.png"  alt="outer" className="w-[35rem] mx-auto absolute left-1/2 -ml-[17.5rem] animate-spin-slow z-20"
        />
        <img src="Ku.png" alt="inner" class="w-[35rem] mx-auto absolute z-20" />
        <img
          src="Kuweni Musical L-04-1.png"
          alt=""
          className=" z-10 w-[50rem] mx-auto mt-[50rem] absolute"
        />
      
      {/* <img src="Kuweni Musical L-04-1.png" alt="" className="w-[35rem] mx-auto  absolute left-[27.45rem] "/> */}
    </div>
  );
}

export default Header;

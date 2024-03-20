
const Footer = () => {
  
  return (
    <footer className="">
      <div className="footer-txt flex justify-center md:justify-between items-center bottom-0  bg-white xl:px-14 footer-menu fixed z-20 left-0 transition-all md:!bottom-[0px] duration-500  h-12 border-t border-[#ebebeb] w-full">
        <div className="txt-1 hidden md:block">
          <span className="text-slate-600 font-medium">
            © 2024 HangarDirect, LLC
            <div class="mr-1  text-slate-600 inline">·</div>
          </span>
          <span className="text-black font-medium">
            Privacy <div class="mr-1  text-slate-600 inline">·</div> Terms
          </span>
        </div>
        <div className="txt-2">
          <p class="mx-1 text-[#000000] font-medium cursor-pointer hover:underline flex items-center ">
            Support &amp; resources
            <span class="  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-1 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

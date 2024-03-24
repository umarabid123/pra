import Header from "@/components/Header";
import Link from "next/link";

const Amienities = () => {
  return (
    <div className="wrapper px-[20px] lg:px-[56px] mb-20">
      <div className="container ">
        <div className="heading flex flex-col mb-4">
          <h1 class="w-full text-center text-2xl font-semibold md:font-bold">
            Available Amenities
          </h1>
          <div class="undefined font-normal text-sm text-center w-full  text-[#737373] pt-3">
            Select available hangar amenities.
          </div>
        </div>
        <div
          id="popup"
          class="flex cursor-pointer justify-between items-center bg-white false !h-14 relative border px-4  rounded-md !min-h-[45px] mb-4 sm:mb-0 w-full  sm:min-w-[250px] "
        >
          <div id="popup" class="flex false items-center gap-1.5 ">
            <input
              type="checkbox"
              class="!w-[14px] h-[14px] outline-none text-blue-600 pl-5 cursor-pointer bg-gray-100 border-gray-300 rounded "
            />
            <div class="!text-xs">
              <div id="popup" class="iconSize  cursor-pointer !text-[#222222]">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="fill-black w-[24px] h-[24px]"
                >
                  <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path>
                </svg>
              </div>
            </div>
            <label
              id="popup"
              class="cursor-pointer text-[12px] pl-1 font-medium select-none !text-[#222222] "
            >
              WiFi
            </label>
          </div>
        </div>
      </div>
      <div className="footer fixed bottom-0 right-0 left-0 bg-white z-50">
        <div class="flex gap-5">
          <div class="relative w-full bg-[#EBEBEB] rounded-r-full h-2.5">
            <div class="bg-primry  h-2.5 rounded-r-full delay-150 transition-all"></div>
          </div>
          <div class="relative w-full bg-[#EBEBEB] rounded-full h-2.5">
            <div class="bg-primar  h-2.5 rounded-full delay-150 transition-all"></div>
          </div>
          <div class="relative w-full  bg-[#EBEBEB] rounded-l-full h-2.5">
            <div class="bg-primar  h-2.5 false rounded-full delay-150 transition-all"></div>
          </div>
        </div>
        <div className="btn flex justify-end gap-2 px-[20px] py-2">
          <Link href="/hangaraddimg">
            <button
              type="submit"
              class="disabled:bg-opacity-50 font-normal flex items-center justify-center text-[16px] sm:p-2 outline-none z-0 px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#0aeef] border-1 border-[#00aeef] text-[#00aeef] !cursor-pointer"
            >
              Back
            </button>
          </Link>
          <Link href="/hangarlastpage">
            <button
              type="submit"
              class="disabled:bg-opacity-50 font-semibold flex items-center justify-center sm:p-2 outline-none z-0 text-[16px] px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#00aeef] text-white !cursor-pointer"
            >
              Finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Amienities;

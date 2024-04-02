import Header from "@/components/Header";
import Link from "next/link";

const Step_7 = () => {
  return (
    <div className="wrapper px-[20px] lg:px-[56px] flex justify-center mb-20">
    <div className="container ">
      <div className="heading mb-4">
        <h1 class="w-full text-center text-2xl font-semibold md:font-bold">
          Check-in instructions
        </h1>
        <div class="font-normal text-sm text-center w-full  text-[#737373] pt-3">
          Entry information and special instructions only provided to confirmed
          bookings.
        </div>
      </div>
      <div className="form">
        <div class="flex items-center px-5 sm:mx-auto sm:w-[50%] gap-3 mb-3">
          <input type="checkbox" className="cursor-pointer pr-6" value="true" />
          <label class="text-sm font-bold cursor-pointer" for="always_on">
            24/7 check-in available
          </label>
        </div>
        <div class="flex items-center px-5 sm:mx-auto sm:w-[50%] gap-3 mb-3">
          <input type="checkbox" className="cursor-pointer pr-6" value="true" />
          <label class="text-sm font-bold cursor-pointer" for="always_on">
            Time restriction(optional)
          </label>
        </div>
        <div class="input-item flex flex-col items-center  sm:mx-auto sm:w-[50%]">
          <div>
            <div class=" p-0.5 font-bold !text-left text-sm">
              Property rules(Optional)
            </div>
            <input
              type="text"
              className="w-[300px] xl:w-[584px] md:w-[330px] lg:w-[450px]  mx-1 px-4 !h-10 rounded-lg border-[1px] p-2 !border-gray-300 hover:border-gray-500 overflow-hidden outline-none text-[14px] font-medium"
              placeholder="Enter Property rule"
            />
            <div className="btn-txt flex flex-col items-end">
              <p class="text-[#00aeef] text-right mt-1 font-[700] text-xs">
                150 of characters remaining
              </p>
              <button
                class="h-10 border mt-2 mb-4 md:mb-2 border-[#D7D7D7] rounded-full text-xs font-[700] text-[#00aeef] px-3  cursor-pointer"
                fdprocessedid="06oem9"
              >
                Add more rules
              </button>
            </div>
          </div>
        </div>
        <div className="input-item flex flex-col items-center sm:mx-auto sm:w-[50%] ">
          <h1 className="text-2xl pl-[40px] md:px-[20px] lg:px-0 font-semibold sm:font-bold self-center mt-4 mb-3">
            Specific check-in instructions
            <span class="text-lg sm:font-medium font-normal"> (optional)</span>
          </h1>
          <div class="text-black relative border border-[#D7D7D7] rounded-md px-4 py-2 cursor-pointer w-[300px] xl:w-[584px] md:w-[330px] lg:w-[450px]">
            <div>Select check-in Instructions</div> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="absolute right-2 top-1/2 -mt-2"
              width="16"
              height="16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
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
          <Link href="/hangarstandout">
            <button
              type="submit"
              class="disabled:bg-opacity-50 font-normal flex items-center justify-center text-[16px] sm:p-2 outline-none z-0 px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#0aeef] border-1 border-[#00aeef] text-[#00aeef] !cursor-pointer"
            >
              Back
            </button>
          </Link>
          <Link href="/hangaraddimg">
            <button
              type="submit"
              class="disabled:bg-opacity-50 font-normal flex items-center justify-center sm:p-2 outline-none z-0 text-[16px] px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#00aeef] text-white !cursor-pointer"
            >
              Next
            </button>
            </Link>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Step_7;

import Header from "@/components/Header";
import Link from "next/link";

const Price = () => {
  return (
    <div className="wrapper px-[20px] lg:px-[56px] mb-20">
      <div className="container ">
        <div className="heading mb-4">
          <h1 class="w-full text-center text-2xl font-semibold md:font-bold">
            Set your price
          </h1>
          <div class="undefined font-normal text-sm text-center w-full  text-[#737373] pt-3">
            Select nightly, monthly, or both.
          </div>
        </div>
        <div className="input-container flex flex-col items-center">
        <div class="input-item flex flex-col items-center  sm:mx-auto sm:w-[50%] my-3">
          <div>
            <div class=" p-0.5 font-bold !text-left text-[17px]">
             Price per night
            </div>
            <div className="w-[300px] xl:w-[400px] md:w-[330px] lg:w-[350px] mx-1 px-4 !h-14 rounded-lg border-2 p-2 !border-gray-300 hover:border-gray-500 overflow-hidden outline-none text-[14px] font-medium flex gap-2 items-center">
               <span className="font-semibold text-[18px]"> $</span>
            <input type="text" placeholder="Enter Price per night" className="text-[16px] xl:w-[400px] outline-none" />
            </div>
          </div>
        </div>
        <div class="input-item flex flex-col items-center  sm:mx-auto sm:w-[50%] mt-2 mb-6 ">
          <div>
          <div class=" p-0.5 font-bold !text-left text-[17px]">
                <input type="checkbox" /> Price per month<span class="text-[#00aeef] text-sm">*</span>
              </div>
            <div className="w-[300px] xl:w-[400px] md:w-[330px] lg:w-[350px]  mx-1 px-4 !h-14 rounded-lg border-2 p-2 !border-gray-300 hover:border-gray-500 overflow-hidden outline-none text-[14px] font-medium flex gap-2 items-center">
               <span className="font-semibold text-[18px]"> $</span>
            <input type="text" placeholder="Enter Price per month" className="text-[16px] xl:w-[400px] outline-none" />
            </div>
          </div>
        </div>
        <div class="font-semibold md:w-1/2 mx-5 text-justify">Please note: The pricing provided by hangar owners should encompass all relevant costs, such as management, cleaning, and utility bills, as well as any airport and federal fees associated with the booking. To ensure a seamless experience for hangar owners and renters, a 3% listing fee will be applied to all hangars, deducted from the final booking. All prices are final and inclusive, reflecting the total cost of the hangar rental.</div>
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
            <Link href="/hangarfinish">
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
export default Price;

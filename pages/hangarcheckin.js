import Header from "@/components/Header";
import Link from "next/link";

const Checkin = () => {
  return (
    <div className="container px-[20px] lg:px-[56px] mb-16">
      <div className="heading mb-4">
        <h1 class="w-full text-center text-2xl font-semibold md:font-bold">
          Check-in instructions
        </h1>
        <div class="undefined font-normal text-sm text-center w-full  text-[#737373] pt-3">
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
        <div class="input-item flex flex-col items-center  sm:mx-auto sm:w-[50%] pt-8"><div><div class=" p-0.5 font-bold !text-left text-sm mx-[1rem]">Property rules(Optional)</div><input type="text" className="w-[560px] px-4 !h-12 rounded-lg border-2 p-2 border-gray-300 hover:border-gray-500 overflow-hidden outline-none text-[16px] font-medium"  placeholder=""/></div></div>
      </div>
    </div>
  );
};
export default Checkin;

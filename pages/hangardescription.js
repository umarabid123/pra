import Header from "@/components/Header";
import Link from "next/link";

const Description = () => {
  return (
    <div className="container px-[20px] lg:px-[56px] text-2xl font-semibold sm:font-bold">
      <div className="heading">
        <h1 class="w-full text-center">Now, let’s give your hangar a title.</h1>
        <div class="font-normal text-sm text-center w-full !text-[#737373] pt-3">
          Short titles work best, you can always change it later.
        </div>
      </div>
      <div className="input-item flex flex-col items-center m-auto w-full pt-8">
        <div>
          <div class=" p-0.5 font-bold !text-left text-[17px]">
            Title<span class="text-[#00aeef] text-sm">*</span>
          </div>
          <input
            type="text"
            class="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] md:3 px-4 !h-12 rounded-lg border-2 p-2 border-gray-300 hover:border-gray-500 overflow-hidden outline-none text-[16px] font-medium"
            placeholder="Hangar listing title"
          ></input>
        </div>
      </div>
      <div className="text mt-6">
        <h1 class="w-full text-center">Create your description</h1>
        <div class="font-normal text-sm text-center w-full text-[#737373] pt-3">
          Tell us a little more about your hangar.
        </div>
        <div className="input-item flex flex-col items-center m-auto w-full">
        <div>
          <div class=" p-0.5 font-bold !text-left text-[17px]">
            Title<span class="text-[#00aeef] text-sm">*</span>
          </div>
          <input
            type="text"
            class="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] md:3 px-4 !h-12 rounded-lg border-2 p-2 border-gray-300 hover:border-gray-500 overflow-hidden outline-none text-[16px] font-medium"
            placeholder="Hangar listing title"
          ></input>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Description;

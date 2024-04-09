import Header from "@/components/Header";
import Link from "next/link";

const Step_6 = () => {
  return (
    <div className="wrapper px-[20px] lg:px-[56px] flex justify-center">
    <div className="container"> 
      <div className="sub-conatiner flex flex-col-reverse md:flex-col lg:flex-row lg:items-center items-center gap-12 mb-16">
        <div className="txt w-full px-3">
          <h1 class=" font-semibold">Step 2</h1>
          <h2 class="md:text-[54px] text-[35px] leading-[60px] font-semibold">Make your hangar stand out</h2>
          <p class="text-[28px] font-semibold mt-4">In this step you will provide hangar amenities and photos.</p>
        </div>
        <img
          src="/images/step-2.png"
          alt=""
          className="w-[100%] sm:w-[72%] pt-2"
          data-aos="fade-left"
        />
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
          <Link href="/hangardimensiondoor">
            <button
              type="submit"
              class="disabled:bg-opacity-50 font-normal flex items-center justify-center text-[16px] sm:p-2 outline-none z-0 px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#0aeef] border-1 border-[#00aeef] text-[#00aeef] !cursor-pointer"
            >
              Back
            </button>
          </Link>
          <Link href="/hangarcheckin">
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
export default Step_6;
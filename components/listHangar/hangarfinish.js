import Header from "@/components/Header";
import Link from "next/link";

const Finish = () => {
  return (
    <div className="wrapper px-[20px] lg:px-[56px] mb-20">
    <div className="container ">
      <div className="sub-conatiner gap-6 flex flex-col-reverse items-center gap-y-5 lg:flex-row lg:items-center lg:justify-center mb-16">
        <div className="txt lg:px-3 lg:w-[42%] sm:w-[600px]">
          <h1 class=" font-semibold">Step 3</h1>
          <h2 class="md:text-[54px] text-[35px] leading-[60px] font-semibold">Finish up and publish</h2>
          <p class="text-[28px] font-semibold mt-4">In this step you will provide hangar price and insurance.</p>
        </div>
        <img
          src="/images/step-3.png"
          alt=""
          className="lg:w-[40%] pt-2"
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
          <Link href="/hangarprice">
            <button
              type="submit"
              class="disabled:bg-opacity-50 font-normal flex items-center justify-center text-[16px] sm:p-2 outline-none z-0 px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#0aeef] border-1 border-[#00aeef] text-[#00aeef] !cursor-pointer"
            >
              Back
            </button>
          </Link>
          <Link href="/hangaramenities">
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
export default Finish;
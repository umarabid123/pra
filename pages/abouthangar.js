import Header from "@/components/Header";
import Link from "next/link";

const About = () => {
  return (
    <div className="wrapper px-[20px] lg:px-[56px] mb-20">
    <div className="container"> 
      <div className="sub-conatiner flex flex-col-reverse md:flex-col lg:flex-row lg:items-center lg:justify-center items-center gap-12 p-mb-16">
        <div className="txt w-full sm:w-[42%] px-3">
          <h1 class=" font-semibold">Step 1</h1>
          <h2 class="text-[40px] sm:w-[400px] leading-[45px] font-semibold mb-4">
            Tell us about your hangar
          </h2>
          <p class="sm:text-sm font-semibold sm:w-full">
            In this step you will provide the location of your hangar and its
            dimensions, along with a title and brief description.
          </p>
        </div>
        <img
          src="/images/hangar-card2.png"
          alt=""
          className="w-[100%] sm:w-[38%] pt-2"
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
        <div className="btn flex justify-end px-[20px] py-2">
          <Link href="/hangarlocation">
            <button
              type="submit"
              class="disabled:bg-opacity-50 bold sm:p-2 outline-none z-0 px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#00aeef] text-white !cursor-pointer"
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
export default About;

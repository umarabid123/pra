import Header from "@/components/Header";
import Link from "next/link";

const Step_1 = () => {
  return (
    <div className="wrapper px-[20px] lg:px-[56px] mb-20 flex justify-center">
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
    
      </div>
      </div>
  );
};
export default Step_1;

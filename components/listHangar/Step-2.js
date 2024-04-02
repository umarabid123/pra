import Header from "@/components/Header";
import Input from "@/components/common/Input";
import Link from "next/link";

const Step_2 = () => {
  return (
    <div className="wrapper px-[20px] lg:px-[56px] flex justify-center">
      <div className="container">
        <div className="location-container mb-20">
          <div className="location-txt mb-4">
            <h1 class="w-full text-center text-2xl font-semibold sm:font-bold px-6 sm:px-0">
              Where is your hangar located?
            </h1>
            <div class="undefined font-normal text-sm text-center w-full !text-[#737373] pt-3">
              Add your hangar address below. Address information won't be shared
              until a reservation has been made.
            </div>
          </div>
          <div className="location-container-item flex flex-col lg:flex-row  lg:gap-6 xl:gap-8 lg:justify-center items-center lg:items-start">
            <img
              src="/images/location.webp"
              alt=""
              className="rounded-md w-full lg:w-[70%] xl:w-[60%] h-auto lg:h-[400px] overflow-hidden"
            />
            <form action="">
              <div className="form self-start lg:w-[48%]">
                <Input
                  label={"Airport Identifier"}
                  placeholder={"Select Airport"}
                  staric
                  customClass={`border-[1px] hover:outline-[#00aeef] w-[300px] md:w-[640px] lg:w-[300px] xl:w-[350px] p-2 rounded-[4px] border-gray-300`}
                />
                <Input
                  label={"Address"}
                  placeholder={"Hangar Address"}
                  staric
                  customClass={`border-[1px] hover:outline-[#00aeef] w-[300px] md:w-[640px] lg:w-[300px] xl:w-[350px] p-2 rounded-[4px] border-gray-300`}
                />
                <Input
                  label={"City"}
                  placeholder={"City"}
                  staric
                  customClass={`border-[1px] hover:outline-[#00aeef] w-[300px] md:w-[640px] lg:w-[300px] xl:w-[350px] p-2 rounded-[4px] border-gray-300`}
                />
                <Input
                  label={"State"}
                  placeholder={"State"}
                  staric
                  customClass={`border-[1px] hover:outline-[#00aeef] w-[300px] md:w-[640px] lg:w-[300px] xl:w-[350px] p-2 rounded-[4px] border-gray-300`}
                />
                <Input
                  label={"Zip Code"}
                  placeholder={"Zip Code"}
                  staric
                  customClass={`border-[1px] hover:outline-[#00aeef] w-[300px] md:w-[640px] lg:w-[300px] xl:w-[350px] p-2 rounded-[4px] border-gray-300`}
                />
              </div>
            </form>
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
            <Link href="/abouthangar">
              <button
                type="submit"
                class="disabled:bg-opacity-50 bold sm:p-2 outline-none z-0 px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#0aeef] border-1 border-[#00aeef] text-[#00aeef] !cursor-pointer"
              >
                Back
              </button>
            </Link>
            <Link href="/hangardescription">
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
export default Step_2;

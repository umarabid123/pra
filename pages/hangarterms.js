import Header from "@/components/Header";
import Link from "next/link";

const Terms = () => {
  return (
    <div className="wrapper px-[20px] lg:px-[56px] mb-20">
      <div className="container ">
        <div className="heading flex flex-col">
      <h1 class="w-full text-center text-2xl font-semibold md:font-bold mb-4">
           Terms and Conditions
          </h1>
        <div class="text-center mt-5 text-[18px] font-semibold">
          By listing your hangar with Hangar Direct, you acknowledge and agree
          to the following terms:
        </div>
        </div>
        <div class="md:w-1/2 px-5 mx-auto my-5 justify-center list-decimal">
          <div class="list-item text-sm">
            <span class="font-semibold">Insurance Responsibility:</span> While
            the submission of hangar insurance is not mandatory, you affirm that
            you maintain sufficient insurance coverage for your listed hangar
            space. In the event of any loss, damage, or liability arising from
            the use of your hangar by a transient or monthly renter booked
            through our platform, Hangar Direct will not be held responsible and
            is fully indemnified from any harm or liability.
          </div>
          <div class="list-item text-sm">
            <span class="font-semibold">Liability Acknowledgment:</span> By
            participating in our platform, you understand and agree that Hangar
            Direct assumes no liability for any incidents, accidents, damages,
            or losses that may occur within your hangar space during a transient
            or monthly rental. Both the property manager and tenant are
            responsible for assuming full responsibility and resolving any
            disputes that may arise during a rental.
          </div>
          <div class="list-item text-sm">
            <span class="font-semibold">Legal Compliance:</span> Hangar owners
            are responsible for ensuring that their hangar space complies with
            all relevant laws, regulations, and safety standards. Any legal
            consequences arising from non-compliance will be the sole
            responsibility of the hangar owner.
          </div>
          <div class="list-item text-sm">
            <span class="font-semibold">Hold Harmless Agreement:</span> You
            agree to indemnify and hold Hangar Direct, its affiliates,
            employees, and agents harmless from any claims, damages, or
            liabilities, including legal fees, arising from the use of your
            hangar space by transient renters facilitated through Hangar Direct.
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
    </div>
  );
};
export default Terms;

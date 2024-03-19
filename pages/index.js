import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}

      <div className="wrapper px-[20px] xl:px-[56px] mb-16 flex flex-col gap-5 max-w-[100%] overflow-hidden">
        <div className="card-item flex flex-wrap justify-center md:gap-4 lg:gap-3 gap-4 w-[100%]">
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-1.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
              <strong>
                Transient Rotorcraft and Fixed Wing - Trinity Aviation GTU
              </strong>
            </div>
            <div class="text-base truncate text-gray-700">
              <strong>
                KGTU - Georgetown Municipal Airport - Georgetown - Texas
              </strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$75</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-2.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
              <strong>
              Newly built hangar 42x30 Manual double cantelever doors with tinted glass
              </strong>
            </div>
            <div class="text-base truncate text-gray-700">
              <strong>
              KONO - Ontario Municipal Airport - Ontario - Oregon
              </strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$60</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-3.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Insulated Hangar with Second Floor</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KHAO - Butler Co Regional Airport - Hogan Field - fairfield - Ohio</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$50</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$1000</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-4.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Turboprop and Jet space </strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KSZT - Sandpoint Airport - Sandpoint - Idaho</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-5.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative object-cover w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>60x60</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KPVG - Hampton Roads Executive Airport - Chesapeake - Virginia</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$2500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-6.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Hangar space for rent</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>74P - Calvada Meadows Airport - Las Vegas - Nevada</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$50</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$850</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-7.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Rockland Maine </strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>74P - Calvada Meadows Airport - Las Vegas - Nevada</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$3500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-8.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Storage in Maintenance Bay</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KHAO - Butler Co Regional Airport - Hogan Field - Fairfield - OH</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-1.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
              <strong>
                Transient Rotorcraft and Fixed Wing - Trinity Aviation GTU
              </strong>
            </div>
            <div class="text-base truncate text-gray-700">
              <strong>
                KGTU - Georgetown Municipal Airport - Georgetown - Texas
              </strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$75</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-2.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
              <strong>
              Newly built hangar 42x30 Manual double cantelever doors with tinted glass
              </strong>
            </div>
            <div class="text-base truncate text-gray-700">
              <strong>
              KONO - Ontario Municipal Airport - Ontario - Oregon
              </strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$60</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-3.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Insulated Hangar with Second Floor</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KHAO - Butler Co Regional Airport - Hogan Field - fairfield - Ohio</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$50</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$1000</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-4.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Turboprop and Jet space </strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KSZT - Sandpoint Airport - Sandpoint - Idaho</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-5.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative object-cover w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>60x60</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KPVG - Hampton Roads Executive Airport - Chesapeake - Virginia</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$2500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-6.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Hangar space for rent</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>74P - Calvada Meadows Airport - Las Vegas - Nevada</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$50</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$850</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-7.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Rockland Maine </strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>74P - Calvada Meadows Airport - Las Vegas - Nevada</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$3500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-8.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Storage in Maintenance Bay</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KHAO - Butler Co Regional Airport - Hogan Field - Fairfield - OH</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-1.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
              <strong>
                Transient Rotorcraft and Fixed Wing - Trinity Aviation GTU
              </strong>
            </div>
            <div class="text-base truncate text-gray-700">
              <strong>
                KGTU - Georgetown Municipal Airport - Georgetown - Texas
              </strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$75</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-2.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
              <strong>
              Newly built hangar 42x30 Manual double cantelever doors with tinted glass
              </strong>
            </div>
            <div class="text-base truncate text-gray-700">
              <strong>
              KONO - Ontario Municipal Airport - Ontario - Oregon
              </strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$60</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-3.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Insulated Hangar with Second Floor</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KHAO - Butler Co Regional Airport - Hogan Field - fairfield - Ohio</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$50</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$1000</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-4.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Turboprop and Jet space </strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KSZT - Sandpoint Airport - Sandpoint - Idaho</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-5.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative object-cover w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>60x60</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KPVG - Hampton Roads Executive Airport - Chesapeake - Virginia</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$2500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-6.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Hangar space for rent</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>74P - Calvada Meadows Airport - Las Vegas - Nevada</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$50</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$850</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-7.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Rockland Maine </strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>74P - Calvada Meadows Airport - Las Vegas - Nevada</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$3500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-8.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Storage in Maintenance Bay</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KHAO - Butler Co Regional Airport - Hogan Field - Fairfield - OH</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-1.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
              <strong>
                Transient Rotorcraft and Fixed Wing - Trinity Aviation GTU
              </strong>
            </div>
            <div class="text-base truncate text-gray-700">
              <strong>
                KGTU - Georgetown Municipal Airport - Georgetown - Texas
              </strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$75</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-2.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
              <strong>
              Newly built hangar 42x30 Manual double cantelever doors with tinted glass
              </strong>
            </div>
            <div class="text-base truncate text-gray-700">
              <strong>
              KONO - Ontario Municipal Airport - Ontario - Oregon
              </strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$60</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-3.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Insulated Hangar with Second Floor</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KHAO - Butler Co Regional Airport - Hogan Field - fairfield - Ohio</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$50</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$1000</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-4.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Turboprop and Jet space </strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KSZT - Sandpoint Airport - Sandpoint - Idaho</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-5.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative object-cover w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>60x60</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KPVG - Hampton Roads Executive Airport - Chesapeake - Virginia</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$2500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-6.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Hangar space for rent</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>74P - Calvada Meadows Airport - Las Vegas - Nevada</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$50</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$850</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-7.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Rockland Maine </strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>74P - Calvada Meadows Airport - Las Vegas - Nevada</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$3500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-8.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Storage in Maintenance Bay</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KHAO - Butler Co Regional Airport - Hogan Field - Fairfield - OH</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-1.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
              <strong>
                Transient Rotorcraft and Fixed Wing - Trinity Aviation GTU
              </strong>
            </div>
            <div class="text-base truncate text-gray-700">
              <strong>
                KGTU - Georgetown Municipal Airport - Georgetown - Texas
              </strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$75</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-2.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
              <strong>
              Newly built hangar 42x30 Manual double cantelever doors with tinted glass
              </strong>
            </div>
            <div class="text-base truncate text-gray-700">
              <strong>
              KONO - Ontario Municipal Airport - Ontario - Oregon
              </strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$60</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-3.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Insulated Hangar with Second Floor</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KHAO - Butler Co Regional Airport - Hogan Field - fairfield - Ohio</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$50</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$1000</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%]  min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-4.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Turboprop and Jet space </strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KSZT - Sandpoint Airport - Sandpoint - Idaho</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-5.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative object-cover w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>60x60</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KPVG - Hampton Roads Executive Airport - Chesapeake - Virginia</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$2500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-6.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Hangar space for rent</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>74P - Calvada Meadows Airport - Las Vegas - Nevada</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$50</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$850</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-7.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Rockland Maine </strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>74P - Calvada Meadows Airport - Las Vegas - Nevada</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           <div className="card-sub-txt">
           <span class="text-black font-bold">$3500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div>
            </div>
          </div>
        </div>
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative">
          <img
            src="/images/card-8.jpg"
            alt=""
            width="300"
            height="400"
            className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[300px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-5"
            viewBox="0 0 20 20"
            id="popup"
            fill="currentColor"
          >
            <path
              id="popup"
              fill-rule="evenodd"
              fill=""
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="card-txt">
            <div class="truncate text-base capitalize mt-2">
            <strong>Storage in Maintenance Bay</strong>
            </div>
            <div class="text-base truncate text-gray-700">
            <strong>KHAO - Butler Co Regional Airport - Hogan Field - Fairfield - OH</strong>
            </div>
            <div className="card-txt-2 flex justify-between items-center my-2">
           <div className="card-sub-txt">
           <span class="text-black font-bold">$200</span>
            <span class="text-gray-600 font-medium pl-1">nightly</span>
           </div>
           {/* <div className="card-sub-txt">
           <span class="text-black font-bold">$500</span>
            <span class="text-gray-600 font-medium pl-1">monthly</span>
           </div> */}
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

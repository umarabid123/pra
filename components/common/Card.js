const Card = ({item}) => {
    return(
        <div className="img object-cover h-[100%] min-w-[100%]  max-w-[100%] md:min-w-[45%]  md:max-w-[45%] lg:min-w-[32%]  lg:max-w-[32%] xl:min-w-[24%] xl:max-w-[20%] aspect-square relative" data-aos="fade-up">
            <img
              src={item.images[0]}
              alt=""
              width="300"
              height="400"
              className="rounded-2xl aspect-square relative w-[100%] md:w-[100%] lg:w-[320px] xl:w-[400px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 fill-gray-300 opacity-30 stroke-white stroke-[1.5px] absolute top-2 right-9"
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
            {item.title}
                </strong>
              </div>
              <div class="text-base truncate text-gray-700">
                <strong>
                  {item.airport.ICAO + " - " + item.airport.name}
                </strong>
              </div>
              <div className="card-txt-2 flex justify-between items-center my-2">
              {!!item.price_per_night &&
                <div className="card-sub-txt">
                  <span class="text-black font-bold">{item.price_per_night + "$"}</span>
                  <span class="text-gray-600 font-medium pl-1">nightly</span>
                </div>}
                {!!item.price_per_month &&
                <div className="card-sub-txt">
                  <span class="text-black font-bold">{item.price_per_month + "$"}</span>
                  <span class="text-gray-600 font-medium pl-1">monthly</span>
                </div>
                }
              </div>
            </div>
          </div>
    )
}
export default Card
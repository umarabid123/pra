const CardSvg = ({ svgItem }) => {
  return (
      <div
        class="flex cursor-pointer justify-between items-center bg-white false !h-14 relative border px-4  rounded-md !min-h-[45px] mb-4 sm:mb-0 w-full  md:min-w-[23%] md:max-w-[29%] xl:min-w-[21%] xl:max-w-[21.7%]"
        id="popup"
      >
        <div id="popup" class="flex false items-center gap-1.5 ">
          <input
            type="checkbox"
            class="!w-[14px] h-[14px] outline-none text-blue-600 pl-5 cursor-pointer bg-gray-100 border-gray-300 rounded "
          />
          <div class="!text-xs">
            <div id="popup" class="iconSize  cursor-pointer !text-[#222222]">
              {svgItem.Icon}
            </div>
          </div>
          <label
            id="popup"
            class="cursor-pointer text-[12px] pl-1 font-medium select-none !text-[#222222] "
          >
            {svgItem.Text}
          </label>
        </div>
      </div>
  );
};
export default CardSvg;

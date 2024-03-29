const Input = ({label, placeholder,staric , customClass}) => {
  return (
    <>
      <div class=" p-0.5 font-bold !text-left text-[17px]">
        {label} {staric &&
          <span class="text-[#00aeef] text-sm">*</span>
        }
      </div>
      <input
          type="text"
          class={`px-4 w-full border-2 p-2 border-gray-300 hover:border-gray-500 overflow-hidden outline-none text-[16px] font-medium  ${customClass}`}
          placeholder={placeholder} />
      
    </>
  );
};
export default Input
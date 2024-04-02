import Link from "next/link";

const ListFooter  = ({onClickNext}) =>{
    return(
        <>
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
      
            <button
              onClick={onClickNext}
              class="disabled:bg-opacity-50 bold sm:p-2 outline-none z-0 px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#00aeef] text-white !cursor-pointer"
            >
              Next
            </button>
        
        </div>
      </div>
        </>
    )
}
export default ListFooter;
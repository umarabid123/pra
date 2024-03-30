const AccountCard = ({cardItem}) => {
  return (
    <>
     <div className="card bg-gray-50 w-[100%] md:w-[49%] lg:w-[32%] xl:min-w-[31%] box-border px-5 py-6 min-h-[160px] rounded-xl shadow-xl border-0 border-s-[#e5e7eb] truncate">
          {cardItem.Icon}
        <br />
          <p class="font-semibold text-base mb-2">{cardItem.heading}</p>
          <abbr
            class="decoration-transparent text-sm truncate"
            title="Manage your profile and the fleet of planes you frequently fly with."
          >
          {cardItem.description}
          </abbr>
        </div>
    </>
  );
};
export default AccountCard
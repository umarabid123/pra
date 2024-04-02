import Link from "next/link";
const Contact = () => {
  return (
    <div className="conatiner mb-16 flex flex-col items-center gap- px-[56px]">
      <img src="/images/hangarPlane.png" alt="" />
      <p class="md:text-5xl font-semibold leading-8 text-3xl md:leading-[66px] md:w-[600px] text-center mt-5 md:mt-8">
        Let‘s get started with listing your hangar.
      </p>

      <Link href="/list-hangar/add">
        <button className="h-full bg-[#00aeef] text-white px-10 py-2 rounded-full mt-6">
          List Your Hangar
        </button>
      </Link>
    </div>
  );
};
export default Contact;

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AccountCard from "@/components/common/AccountCard";
import Link from "next/link";

const HostingIcon = [
  {
    Icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 48 48"
        enable-background="new 0 0 48 48"
        id="Layer_3"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        class="w-6 h-6 md:w-8 md:h-8"
      >
        <g>
          <rect fill="#241F20" height="4" width="35" x="13" y="12.448"></rect>
          <polygon
            fill="#241F20"
            points="3.961,13.321 2.121,11.481 0,13.603 1.84,15.443 1.836,15.447 3.958,17.568 11.097,10.429    8.976,8.307  "
          ></polygon>
          <rect fill="#241F20" height="4" width="35" x="13" y="23.511"></rect>
          <polygon
            fill="#241F20"
            points="3.962,24.384 2.121,22.544 0,24.666 1.84,26.506 1.836,26.51 3.958,28.631 11.097,21.491    8.976,19.37  "
          ></polygon>
          <rect fill="#241F20" height="4" width="35" x="13" y="34.574"></rect>
          <polygon
            fill="#241F20"
            points="3.961,35.445 2.121,33.607 0,35.729 1.84,37.568 1.836,37.572 3.958,39.693 11.097,32.555    8.976,30.432  "
          ></polygon>
        </g>
      </svg>
    ),
    heading: "Manage Listings",
    description: "View current and past listings.",
  },
  {
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 md:w-8 md:h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        ></path>
      </svg>
    ),
    heading: "Payments & Payouts",
    description: "Review payment methods and configure payouts.",
  },
];
const CardIcon = [
  {
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 md:w-8 md:h-8 "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        ></path>
      </svg>
    ),
    heading: "My Profile / Planes",
    description:
      "Manage your profile and the fleet of planes you frequently fly with.",
  },
  {
    Icon: (
      <svg
        class="w-6 h-6 md:w-8 md:h-8"
        width="58"
        height="42"
        viewBox="0 0 58 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9563 6.85787C18.707 3.10714 23.7941 1 29.0984 1C34.4027 1 39.4898 3.10714 43.2405 6.85787C47.1793 10.8263 49.4314 16.1638 49.5259 21.7542V28.8567M56.5953 21.7957L49.5242 28.8668L42.4531 21.7957M43.2421 35.1421C39.4913 38.8928 34.4043 41 29.0999 41C23.7956 41 18.7085 38.8928 14.9578 35.1421C11.0191 31.1737 8.76698 25.8362 8.67239 20.2457V13.1432M8.67239 13.1432L15.7437 20.2143M8.67239 13.1432L1.60156 20.2143"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M29.0977 8.99998V33M35.0977 16C35.0977 13.2386 32.4115 11 29.0977 11C25.7839 11 23.0977 13.2386 23.0977 16C23.0977 18.7614 25.7839 21 29.0977 21C32.4115 21 35.0977 23.2386 35.0977 26C35.0977 28.7614 32.4115 31 29.0977 31C25.7839 31 23.0977 28.7614 23.0977 26"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        ></path>
      </svg>
    ),
    heading: "Manage Monthly Reservations",
    description: "View current and past monthly reservations.",
  },
  {
    Icon: (
      <svg
        class="w-6 h-6 md:w-8 md:h-8"
        width="800px"
        height="800px"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.93478 12.2643L3.41722 12.3956C3.46886 12.206 3.40458 12.0036 3.25296 11.8786L2.93478 12.2643ZM2.32609 14.5L1.84365 14.3687C1.79246 14.5567 1.85516 14.7573 2.00431 14.8827C2.15345 15.0081 2.36187 15.0354 2.5383 14.9527L2.32609 14.5ZM4.76087 13.3587L4.9491 12.8955C4.81999 12.843 4.67484 12.8468 4.54865 12.906L4.76087 13.3587ZM6.5 6.5L6.8 6.1L6.5072 5.8804L6.20938 6.09313L6.5 6.5ZM8.5 8L8.2 8.4L8.51633 8.63725L8.82009 8.38411L8.5 8ZM7.5 0C3.37858 0 0 3.20099 0 7.19565H1C1 3.79466 3.88855 1 7.5 1V0ZM0 7.19565C0 9.38419 1.02256 11.335 2.6166 12.65L3.25296 11.8786C1.87049 10.7381 1 9.06224 1 7.19565H0ZM2.45234 12.1329L1.84365 14.3687L2.80853 14.6313L3.41722 12.3956L2.45234 12.1329ZM2.5383 14.9527L4.97309 13.8114L4.54865 12.906L2.11387 14.0473L2.5383 14.9527ZM4.57264 13.8219C5.47308 14.1878 6.46213 14.3913 7.5 14.3913V13.3913C6.59369 13.3913 5.73232 13.2137 4.9491 12.8955L4.57264 13.8219ZM7.5 14.3913C11.6214 14.3913 15 11.1903 15 7.19565H14C14 10.5966 11.1114 13.3913 7.5 13.3913V14.3913ZM15 7.19565C15 3.20099 11.6214 0 7.5 0V1C11.1114 1 14 3.79466 14 7.19565H15ZM3.29062 9.40687L6.79062 6.90687L6.20938 6.09313L2.70938 8.59313L3.29062 9.40687ZM6.2 6.9L8.2 8.4L8.8 7.6L6.8 6.1L6.2 6.9ZM8.82009 8.38411L11.8201 5.88411L11.1799 5.11589L8.17991 7.61589L8.82009 8.38411Z"
          fill="#000000"
        ></path>
      </svg>
    ),
    heading: "User Messenger",
    description: "Chat with your hosts.",
  },
  {
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800px"
        height="800px"
        class="w-6 h-6 md:w-8 md:h-8"
        viewBox="0 0 52 42"
        fill="none"
      >
        <path
          d="M31.9302 16.1351V14.4535C31.9302 13.5614 31.5759 12.7059 30.9451 12.0752C30.3144 11.4444 29.4589 11.0901 28.5669 11.0901H23.5218C22.6298 11.0901 21.7743 11.4444 21.1436 12.0752C20.5128 12.7059 20.1585 13.5614 20.1585 14.4535V16.1351M13.0726 41V39.3183C13.0726 38.4263 12.7182 37.5708 12.0874 36.9401C11.4567 36.3093 10.6012 35.955 9.70919 35.955H4.66414C3.77213 35.955 2.91664 36.3093 2.28589 36.9401C1.65513 37.5708 1.30078 38.4263 1.30078 39.3183V41M50.7903 41V39.3183C50.7903 38.4263 50.4359 37.5708 49.8052 36.9401C49.1744 36.3093 48.3189 35.955 47.4269 35.955H42.3819C41.4898 35.955 40.6344 36.3093 40.0036 36.9401C39.3729 37.5708 39.0185 38.4263 39.0185 39.3183V41M16.4491 18.1661L11.8624 22.7528M35.6457 18.1661L40.2324 22.7528M29.4077 4.36336C29.4077 6.2209 27.9019 7.72673 26.0444 7.72673C24.1868 7.72673 22.681 6.2209 22.681 4.36336C22.681 2.50583 24.1868 1 26.0444 1C27.9019 1 29.4077 2.50583 29.4077 4.36336ZM10.55 29.2282C10.55 31.0858 9.0442 32.5916 7.18667 32.5916C5.32913 32.5916 3.8233 31.0858 3.8233 29.2282C3.8233 27.3707 5.32913 25.8649 7.18667 25.8649C9.0442 25.8649 10.55 27.3707 10.55 29.2282ZM48.2677 29.2282C48.2677 31.0858 46.7619 32.5916 44.9044 32.5916C43.0468 32.5916 41.541 31.0858 41.541 29.2282C41.541 27.3707 43.0468 25.8649 44.9044 25.8649C46.7619 25.8649 48.2677 27.3707 48.2677 29.2282Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
    heading: "Referrals",
    description: "See your referrals and earnings here.",
  },
];

const Account = () => {
  return (
    <div className="wrapper px-[20px] xl:px-[80px] mb-20 bg-white">
      <p class="text-4xl font-semibold mb-2">Account </p>
      <div className="card-container flex gap-3 md:gap-3 lg:gap-4 xl:gap-3 flex-wrap mt-10">
        {CardIcon.map((cardItem, index) => (
          <AccountCard {...{ cardItem }} />
        ))}
      </div>
      <div className="hosting mt-20">
        <p class="text-4xl font-semibold mb-2">Hosting </p>
        <div className="card-container flex gap-3 md:gap-3 lg:gap-4 xl:gap-3 flex-wrap mt-10">
          {HostingIcon.map((cardItem, index) => (
            <AccountCard {...{ cardItem }} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Account;

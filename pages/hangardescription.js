import Header from "@/components/Header";
import Input from "@/components/common/Input";
import Link from "next/link";

const Description = () => {
  return (
    <div className="wrapper px-[20px] lg:px-[56px] overflow-hidden">
    <div className="container text-2xl font-semibold sm:font-bold mb-20">
      <div className="heading">
        <h1 class="w-full text-center">Now, let’s give your hangar a title.</h1>
        <div class="font-normal text-sm text-center w-full !text-[#737373] pt-3">
          Short titles work best, you can always change it later.
        </div>
      </div>
      <div className="input-item flex flex-col items-center m-auto w-full pt-8">
        <Input label={"Title"} placeholder={"Hangar listing title"} staric customClass={`w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] md:3 px-4 !h-12 rounded-lg border-2 p-2 border-gray-300 hover:border-gray-500 overflow-hidden outline-none text-[16px] font-medium`}/>
      </div>
      <div className="text mt-6">
        <h1 class="w-full text-center">Create your description</h1>
        <div class="font-normal text-sm text-center w-full text-[#737373] pt-3">
          Tell us a little more about your hangar.
        </div>
        <div className="input-item flex flex-col items-center m-auto w-full">
          <div>
            <div class=" p-0.5 font-bold !text-left text-[17px]">
              Description<span class="text-[#00aeef] text-sm">*</span>
            </div>
            <div className="border-[2px] border-gray-300 py-[4px] rounded-md hover:border-gray-500 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
              <div className="flex gap-8 overflow-x-scroll xl:overflow-hidden">
                <div
                  class="description-item flex gap-2"
                  title=""
                  role="toolbar"
                  data-alloy-tabstop="true"
                  tabindex="-1"
                >
                  <button
                    aria-label="Bold"
                    title="Bold"
                    type="button"
                    tabindex="-1"
                    class="tox-tbtn"
                    aria-disabled="false"
                    aria-pressed="false"
                  >
                    <span class="tox-icon tox-tbtn__icon-wrap">
                      <svg width="24" height="24" focusable="false">
                        <path
                          d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 0 1-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8Zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4Zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    aria-label="Italic"
                    title="Italic"
                    type="button"
                    tabindex="-1"
                    class="tox-tbtn"
                    aria-disabled="false"
                    aria-pressed="false"
                  >
                    <span class="tox-icon tox-tbtn__icon-wrap">
                      <svg width="24" height="24" focusable="false">
                        <path
                          d="m16.7 4.7-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    aria-pressed="false"
                    aria-label="Background color Black"
                    title="Background color Black"
                    role="button"
                    aria-haspopup="true"
                    tabindex="-1"
                    unselectable="on"
                    class="flex items-center gap-1"
                    aria-disabled="false"
                    aria-expanded="false"
                    aria-describedby="aria_1695043202191711093243823"
                  >
                    <span
                      role="presentation"
                      class="tox-tbtn"
                      aria-disabled="false"
                    >
                      <span class="tox-icon tox-tbtn__icon-wrap">
                        <svg width="24" height="24" focusable="false">
                          <g fill-rule="evenodd">
                            <path
                              class="tox-icon-highlight-bg-color__color"
                              d="M3 18h18v3H3z"
                              fill="#000000"
                            ></path>
                            <path
                              fill-rule="nonzero"
                              d="M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 0 1 2.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </span>
                    <span
                      role="presentation"
                      class="tox-tbtn tox-split-button__chevron"
                      aria-disabled="false"
                    >
                      <svg width="10" height="10" focusable="false" fill="gray">
                        <path
                          d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    </span>
                    <span
                      aria-hidden="true"
                      id="aria_1695043202191711093243823"
                      className="hidden"
                    >
                      To open the popup, press Shift+Enter
                    </span>
                  </div>
                </div>
                <div
                  class="description-item flex gap-2 px-[12px]"
                  title=""
                  role="toolbar"
                  data-alloy-tabstop="true"
                  tabindex="-1"
                >
                  <button
                    aria-label="Align left"
                    title="Align left"
                    type="button"
                    tabindex="-1"
                    class="tox-tbtn"
                    aria-disabled="false"
                    aria-pressed="false"
                  >
                    <span class="tox-icon tox-tbtn__icon-wrap">
                      <svg width="24" height="24" focusable="false">
                        <path
                          d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    aria-label="Align center"
                    title="Align center"
                    type="button"
                    tabindex="-1"
                    class="tox-tbtn"
                    aria-disabled="false"
                    aria-pressed="false"
                  >
                    <span class="tox-icon tox-tbtn__icon-wrap">
                      <svg width="24" height="24" focusable="false">
                        <path
                          d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2Zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    aria-label="Align right"
                    title="Align right"
                    type="button"
                    tabindex="-1"
                    class="tox-tbtn"
                    aria-disabled="false"
                    aria-pressed="false"
                  >
                    <span class="tox-icon tox-tbtn__icon-wrap">
                      <svg width="24" height="24" focusable="false">
                        <path
                          d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    aria-label="Justify"
                    title="Justify"
                    type="button"
                    tabindex="-1"
                    class="tox-tbtn"
                    aria-disabled="false"
                    aria-pressed="false"
                  >
                    <span class="tox-icon tox-tbtn__icon-wrap">
                      <svg width="24" height="24" focusable="false">
                        <path
                          d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  class="description-item flex gap-2"
                  title=""
                  role="toolbar"
                  data-alloy-tabstop="true"
                  tabindex="-1"
                >
                  <div
                    class="flex gap-1 items-center"
                    aria-pressed="false"
                    aria-label="Bullet list"
                    title="Bullet list"
                    role="button"
                    aria-haspopup="true"
                    tabindex="-1"
                    unselectable="on"
                    aria-disabled="false"
                    aria-expanded="false"
                    aria-describedby="aria_83949182201711093243829"
                  >
                    <span
                      role="presentation"
                      class="tox-tbtn"
                      aria-disabled="false"
                    >
                      <span class="tox-icon tox-tbtn__icon-wrap">
                        <svg width="24" height="24" focusable="false">
                          <path
                            d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2ZM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1Zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1Zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <span
                      role="presentation"
                      class="tox-tbtn tox-split-button__chevron"
                      aria-disabled="false"
                    >
                      <svg width="10" height="10" focusable="false" fill="gray">
                        <path
                          d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden"
                      id="aria_83949182201711093243829"
                    >
                      To open the popup, press Shift+Enter
                    </span>
                  </div>
                  <div
                    aria-pressed="false"
                    aria-label="Numbered list"
                    title="Numbered list"
                    role="button"
                    aria-haspopup="true"
                    tabindex="-1"
                    unselectable="on"
                    class="flex gap-2 items-center"
                    aria-disabled="false"
                    aria-expanded="false"
                    aria-describedby="aria_2154340882211711093243830"
                  >
                    <span
                      role="presentation"
                      class="tox-tbtn"
                      aria-disabled="false"
                    >
                      <span class="tox-icon tox-tbtn__icon-wrap">
                        <svg width="24" height="24" focusable="false">
                          <path
                            d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 1 1 0-2ZM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1H6Zm-1 8.8.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2H4.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3ZM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 0 1 0-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 1 1 0-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 1 1 0-1H6c.6 0 1 .4 1 1Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <span
                      role="presentation"
                      class="tox-tbtn tox-split-button__chevron"
                      aria-disabled="false"
                    >
                      <svg width="10" height="10" focusable="false" fill="gray">
                        <path
                          d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden"
                      id="aria_2154340882211711093243830"
                    >
                      To open the popup, press Shift+Enter
                    </span>
                  </div>
                  <button
                    aria-label="Decrease indent"
                    title="Decrease indent"
                    type="button"
                    tabindex="-1"
                    class="tox-tbtn tox-tbtn--disabled"
                    aria-disabled="true"
                  >
                    <span class="tox-icon tox-tbtn__icon-wrap">
                      <svg width="24" height="24" focusable="false" fill="gray">
                        <path
                          d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2Zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm1.6-3.8a1 1 0 0 1-1.2 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 0 1 1.2 1.6L6.8 12l1.8 1.2Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    aria-label="Increase indent"
                    title="Increase indent"
                    type="button"
                    tabindex="-1"
                    class="tox-tbtn"
                    aria-disabled="false"
                  >
                    <span class="tox-icon tox-tbtn__icon-wrap">
                      <svg width="24" height="24" focusable="false">
                        <path
                          d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2Zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="description-item flex gap-2">
                  <button
                    class="px-[12px]"
                    aria-label="Clear formatting"
                    title="Clear formatting"
                    type="button"
                    tabindex="-1"
                    aria-disabled="false"
                  >
                    <span class="tox-icon tox-tbtn__icon-wrap">
                      <svg width="24" height="24" focusable="false">
                        <path
                          d="M13.2 6a1 1 0 0 1 0 .2l-2.6 10a1 1 0 0 1-1 .8h-.2a.8.8 0 0 1-.8-1l2.6-10H8a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2h-3.8ZM5 18h7a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm13 1.5L16.5 18 15 19.5a.7.7 0 0 1-1-1l1.5-1.5-1.5-1.5a.7.7 0 0 1 1-1l1.5 1.5 1.5-1.5a.7.7 0 0 1 1 1L17.5 17l1.5 1.5a.7.7 0 0 1-1 1Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    aria-label="Help"
                    title="Help"
                    type="button"
                    tabindex="-1"
                    class="tox-tbtn"
                    aria-disabled="false"
                  >
                    <span class="tox-icon tox-tbtn__icon-wrap">
                      <svg width="24" height="24" focusable="false">
                        <g fill-rule="evenodd">
                          <path d="M12 5.5a6.5 6.5 0 0 0-6 9 6.3 6.3 0 0 0 1.4 2l1 1a6.3 6.3 0 0 0 3.6 1 6.5 6.5 0 0 0 6-9 6.3 6.3 0 0 0-1.4-2l-1-1a6.3 6.3 0 0 0-3.6-1ZM12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4Z"></path>
                          <path
                            d="M9.6 9.7a.7.7 0 0 1-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 0 0-.8.8.8.8 0 0 1-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8Z"
                            fill-rule="nonzero"
                          ></path>
                          <circle cx="12" cy="16" r="1"></circle>
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="hr border-b-4 border-[#00aeef] rounded-md"></div>
              {/* <input
                type=""
                class="w-[300px] md:w-[400px] h-28 lg:w-[500px] xl:w-[600px] md:3 px-4 !h-17 rounded-lg border-none p-2 overflow-hidden outline-none text-[16px] font-medium " 
                placeholder=""
              ></input> */}
              <textarea
                name="text"
                id=""
                cols="50"
                rows="5"
                className="outline-none font-normal text-[16px]"
              ></textarea>
              <div className="hr border-t-[1px] border-gray-300 px-[-12px]"></div>
              <div className="txt-f flex justify-between items-end px-[8px]">
                <p className="font-normal text-[14px] text-gray-500">P</p>
                <p className="font-normal text-[14px] text-gray-500">
                  Press Alt+O for help
                </p>
                <div className="svg flex items-center gap-2">
                  <p className="font-normal text-[14px] text-gray-500">
                    0 Words
                  </p>
                  <svg width="10" height="10" focusable="false" fill="gray">
                    <g fill-rule="nonzero">
                      <path d="M8.1 1.1A.5.5 0 1 1 9 2l-7 7A.5.5 0 1 1 1 8l7-7ZM8.1 5.1A.5.5 0 1 1 9 6l-3 3A.5.5 0 1 1 5 8l3-3Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
          <Link href="/hangarlocation">
            <button
              type="submit"
              class="disabled:bg-opacity-50 font-normal flex items-center justify-center text-[16px] sm:p-2 outline-none z-0 px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#0aeef] border-1 border-[#00aeef] text-[#00aeef] !cursor-pointer"
            >
              Back
            </button>
          </Link>
          <Link href="/hangardimension">
            <button
              type="submit"
              class="disabled:bg-opacity-50 font-normal flex items-center justify-center sm:p-2 outline-none z-0 text-[16px] px-6 select-none sm:w-24 h-10 border-l border rounded-full bg-[#00aeef] text-white !cursor-pointer"
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
export default Description;

function Searchbar() {
  return (
    <div className="relative mx-2 md:ml-4 lg:ml-12 md:py-6  py-3.5 items-center justify-center md:w-2/5 ">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          className="w-5  bg-[#F5F5F5] h-5 border-1"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3417 19.25C16.1512 19.25 20.0501 15.3512 20.0501 10.5417C20.0501 5.7322 16.1512 1.83334 11.3417 1.83334C6.53225 1.83334 2.63339 5.7322 2.63339 10.5417C2.63339 15.3512 6.53225 19.25 11.3417 19.25Z"
            stroke="#787486"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M20.9667 20.1667L19.1334 18.3333"
            stroke="#787486"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <input
        type="text"
        className="xs:w-28 sm:w-52 md:w-56 lg:w-60 xl:w-96 rounded-md pl-11 py-2.5 bg-[#F5F5F5] focus:outline-none"
        placeholder="Search for anything..."
        required=""
      />
    </div>
  );
}

export default Searchbar;

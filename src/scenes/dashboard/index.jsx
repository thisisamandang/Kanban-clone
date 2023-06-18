import DashboardControls from "../../components/DashboardControls";
import pp1 from "../../assets/pp1.png";
import pp2 from "../../assets/pp2.png";
import pp3 from "../../assets/pp3.png";
import pp4 from "../../assets/pp4.png";
import DragAndDrop from "../../components/DragAndDrop";
function Dashboard() {
  return (
    <>
      <div className="md:flex-row flex  md:justify-between flex-col justify-center items-center ">
        <div className="mt-10 ml-12 flex items-center justify-center md:gap-4 gap-1">
          <h1 className=" text-4xl 2xl:text-5xl font-semibold">Mobile App</h1>
          <button>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
                fill="#5030E5"
                fillOpacity="0.2"
              />
              <path
                d="M16.1375 9.80001L9.64998 16.2875C9.39998 16.5375 9.16249 17.025 9.11249 17.375L8.76249 19.85C8.63749 20.75 9.26249 21.375 10.1625 21.25L12.6375 20.9C12.9875 20.85 13.475 20.6125 13.725 20.3625L20.2125 13.875C21.325 12.7625 21.8625 11.4625 20.2125 9.81251C18.5625 8.15001 17.2625 8.67501 16.1375 9.80001Z"
                stroke="#5030E5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.2125 10.725C15.7625 12.6875 17.3 14.2375 19.275 14.7875"
                stroke="#5030E5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
                fill="#5030E5"
                fillOpacity="0.2"
              />
              <path
                d="M16.9933 19.3167H18C20.3828 19.3167 22.3167 17.3829 22.3167 15C22.3167 12.6172 20.3828 10.6833 18 10.6833H17C16.6359 10.6833 16.35 10.9785 16.35 11.3333C16.35 11.6895 16.6438 11.9833 17 11.9833H18C19.6638 11.9833 21.0167 13.3362 21.0167 15C21.0167 16.6638 19.6638 18.0167 18 18.0167H16.9933C16.6372 18.0167 16.3433 18.3105 16.3433 18.6667C16.3433 19.0229 16.6372 19.3167 16.9933 19.3167Z"
                fill="#5030E5"
                stroke="#5030E5"
                strokeWidth="0.3"
              />
              <path
                d="M12 19.3167H13C13.3562 19.3167 13.65 19.0229 13.65 18.6667C13.65 18.3105 13.3562 18.0167 13 18.0167H12C10.3362 18.0167 8.98334 16.6638 8.98334 15C8.98334 13.3362 10.3362 11.9833 12 11.9833H13C13.3562 11.9833 13.65 11.6895 13.65 11.3333C13.65 10.9772 13.3562 10.6833 13 10.6833H12C9.61716 10.6833 7.68334 12.6172 7.68334 15C7.68334 17.3829 9.61716 19.3167 12 19.3167Z"
                fill="#5030E5"
                stroke="#5030E5"
                strokeWidth="0.3"
              />
              <path
                d="M12.3333 15.65H17.6667C18.0228 15.65 18.3167 15.3562 18.3167 15C18.3167 14.6438 18.0228 14.35 17.6667 14.35H12.3333C11.9772 14.35 11.6833 14.6438 11.6833 15C11.6833 15.3562 11.9772 15.65 12.3333 15.65Z"
                fill="#5030E5"
                stroke="#5030E5"
                strokeWidth="0.3"
              />
            </svg>
          </button>
        </div>
        {/* Right side */}
        <div className="flex mr-12 items-center mt-10">
          <button>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9H12"
                stroke="#5030E5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12V6"
                stroke="#5030E5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
                fill="#5030E5"
                fillOpacity="0.2"
              />
            </svg>
          </button>
          <button className="text-[#5030E5] font-medium mr-3 ml-2">
            Invite
          </button>

          <div className="flex items-center  space-x-[-10px]">
            <img
              className="rounded-full border h-9 w-9 border-[#ffffff]"
              src={pp1}
              alt="asd"
            />
            <img
              className="rounded-full border h-9 w-9 border-[#ffffff]"
              src={pp2}
              alt="asd"
            />
            <img
              className="rounded-full border h-9 w-9 border-[#ffffff]"
              src={pp3}
              alt="asd"
            />
            <img
              className="rounded-full border h-9 w-9 border-[#ffffff]"
              src={pp4}
              alt="asd"
            />
            <div className=" bg-[#F4D7DA] border-[#ffffff] px-2 py-2 h-9 w-9 rounded-full border">
              <p className="text-[#D25B68] text-sm font-medium">+2</p>
            </div>
          </div>
        </div>
      </div>
      <DashboardControls />
      <CardsContainer />
    </>
  );
}

export default Dashboard;

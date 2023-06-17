import NavIcons from "../../components/NavIcons";
import Searchbar from "../../components/Searchbar";

function Navbar() {
  return (
    <div className="flex flex-shrink justify-between items-center border-b border-[#DBDBDB] ">
      <Searchbar />
      <div className="flex">
        <NavIcons />
        <div className="flex-col sm:mr-2 md:mr-4 mr-2">
          <p className="font-normal sm:text-sm xs:text-sm ss:text-xs text-base">
            Aman Dang
          </p>
          <p className="font-normal text-right sm:text-xs ss:text-xs xs:text-xs  text-[#787486] text-sm">
            Delhi, India
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://i.pinimg.com/564x/e0/66/b9/e066b9ce520b570f9e229ddc09c4d180.jpg"
            alt=""
            className="w-10 h-10 mr-2 rounded-3xl"
          />
          <button className="mr-12 xs:mr-4">
            <svg
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00002 6.60001C6.47502 6.60001 5.95002 6.39751 5.55252 6.00001L0.662515 1.11001C0.445015 0.892511 0.445015 0.532511 0.662515 0.315011C0.880015 0.097511 1.24001 0.097511 1.45751 0.315011L6.34752 5.20501C6.70752 5.56501 7.29252 5.56501 7.65252 5.20501L12.5425 0.315011C12.76 0.097511 13.12 0.097511 13.3375 0.315011C13.555 0.532511 13.555 0.892511 13.3375 1.11001L8.44752 6.00001C8.05002 6.39751 7.52502 6.60001 7.00002 6.60001Z"
                fill="#292D32"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

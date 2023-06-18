/* eslint-disable react/prop-types */
function Buttons({ title, svg, svg2 }) {
  return (
    <button className="py-2 px-4 flex items-center border rounded-md text-[#787486]">
      {svg}
      {title}
      {svg2}
    </button>
  );
}

export default Buttons;

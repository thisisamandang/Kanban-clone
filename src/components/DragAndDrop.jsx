import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getColumnClass, getColumnStyles } from "./getColumnClass";
import { sampleColumns } from "../data/data";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  console.log(source, destination);
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function CardsContainer() {
  const [columns, setColumns] = useState(sampleColumns);
  return (
    <div className=" flex flex-col my-10 mx-5 justify-center lg:justify-around lg:items-baseline items-center lg:flex-row rounded-2xl ">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <div key={columnId}>
              <div
                className={`m-2 w-96 lg:w-fit bg-[pink] rounded-2xl ${getColumnClass(
                  column.name
                )} `}
                style={{
                  minHeight: "574px",
                  maxWidth: "500px",
                }}
              >
                <div className="flex py-3 px-2 justify-between mt-2 items-center">
                  <div className="flex  gap-3  items-center">
                    {/* Dots */}
                    <div
                      className={`ml-4 rounded-full w-2 h-2 ${getColumnStyles(
                        column.name
                      )}`}
                    ></div>
                    {/* Column Name */}
                    <h2 className="font-medium text-base ">{column.name}</h2>
                    {/* Counter */}
                    <div className="bg-[#E0E0E0] font-medium text-[#625F6D] text-xs rounded-xl w-5 h-5 px-1.5 py-0.5 ">
                      <span>{column.items.length}</span>
                    </div>
                  </div>

                  {column.name === "To do" ? (
                    <button className=" mx-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                          fill="#5030E5"
                        />
                        <path
                          d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                          fill="#5030E5"
                        />
                      </svg>
                    </button>
                  ) : null}
                </div>
                {/* Separation line */}
                <div
                  className={`w-50 h-1 rounded-sm mx-4 mt-3 border ${getColumnStyles(
                    column.name
                  )}`}
                ></div>

                <Droppable droppableId={columnId} key={columnId}>
                  {(provided) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="bg-[#F5F5F5] p-5  flex flex-col rounded-2xl items-center justify-center "
                        style={{
                          minHeight: "574px",
                          minWidth: "314px",
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className=" my-4 2xl:mx-7 2xl:w-80 rounded-2xl p-4"
                                    style={{
                                      userSelect: "none",
                                      minWidth: "100px",
                                      maxWidth: "400px",
                                      // margin: "8px 8px 8px 8px",
                                      minHeight: "170px",
                                      backgroundColor: "#FFFFFF",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <div className="flex my-1 mx-2 2xl:mx-5 items-center justify-between">
                                      <span
                                        className={`font-medium text-sm py-1 px-1.5 rounded ${
                                          item.priority === "Completed"
                                            ? "bg-[#83C29D33]/[0.2] text-[#68B266]"
                                            : "bg-[#DFA87433]/[0.2] text-[#D58D49]"
                                        }`}
                                      >
                                        {item.priority}
                                      </span>
                                      <button>
                                        <svg
                                          className="mx-3"
                                          width="15"
                                          height="4"
                                          viewBox="0 0 15 4"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M2.44318 3.16477C2.03409 3.16477 1.68371 3.02083 1.39205 2.73295C1.10417 2.44508 0.962121 2.09659 0.965909 1.6875C0.962121 1.28598 1.10417 0.943182 1.39205 0.659091C1.68371 0.371212 2.03409 0.227273 2.44318 0.227273C2.82955 0.227273 3.17045 0.371212 3.46591 0.659091C3.76515 0.943182 3.91667 1.28598 3.92045 1.6875C3.91667 1.96023 3.8447 2.20833 3.70455 2.43182C3.56818 2.6553 3.38826 2.83333 3.16477 2.96591C2.94508 3.09848 2.70455 3.16477 2.44318 3.16477ZM7.78131 3.16477C7.37222 3.16477 7.02184 3.02083 6.73017 2.73295C6.44229 2.44508 6.30025 2.09659 6.30403 1.6875C6.30025 1.28598 6.44229 0.943182 6.73017 0.659091C7.02184 0.371212 7.37222 0.227273 7.78131 0.227273C8.16767 0.227273 8.50858 0.371212 8.80403 0.659091C9.10328 0.943182 9.25479 1.28598 9.25858 1.6875C9.25479 1.96023 9.18282 2.20833 9.04267 2.43182C8.90631 2.6553 8.72638 2.83333 8.5029 2.96591C8.2832 3.09848 8.04267 3.16477 7.78131 3.16477ZM13.1194 3.16477C12.7103 3.16477 12.36 3.02083 12.0683 2.73295C11.7804 2.44508 11.6384 2.09659 11.6422 1.6875C11.6384 1.28598 11.7804 0.943182 12.0683 0.659091C12.36 0.371212 12.7103 0.227273 13.1194 0.227273C13.5058 0.227273 13.8467 0.371212 14.1422 0.659091C14.4414 0.943182 14.5929 1.28598 14.5967 1.6875C14.5929 1.96023 14.5209 2.20833 14.3808 2.43182C14.2444 2.6553 14.0645 2.83333 13.841 2.96591C13.6213 3.09848 13.3808 3.16477 13.1194 3.16477Z"
                                            fill="#0D062D"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                    <div className="mx-2 2xl:mx-5">
                                      <h3 className="font-semibold my-1  text-lg text-[#0D062D]">
                                        {item.title}
                                      </h3>
                                      <p className="text-[#787486]  font-normal text-xs">
                                        {item.content}
                                      </p>
                                    </div>
                                    {/* Thumbnails */}
                                    <div>
                                      {item.thumbnailURL ? (
                                        <img
                                          src={item.thumbnailURL}
                                          alt="thumbnail"
                                          className="rounded-lg  2xl:mx-5 mx-2"
                                          style={{
                                            maxWidth: "200px",
                                            maxHeight: "200px",
                                          }}
                                        />
                                      ) : null}
                                    </div>
                                    {/* Profiles , comments , files */}
                                    <div className="flex mt-7 mx-2 justify-between">
                                      <div className="flex">
                                        {item.dp.map((dp, index) => {
                                          return (
                                            <img
                                              className="rounded-full w-6 h-6"
                                              key={index}
                                              src={dp}
                                            ></img>
                                          );
                                        })}
                                      </div>
                                      <div className="flex items-center gap-3">
                                        <button className="flex items-center gap-2">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z"
                                              fill="#787486"
                                            />
                                            <path
                                              d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z"
                                              fill="#787486"
                                            />
                                            <path
                                              d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z"
                                              fill="#787486"
                                            />
                                            <path
                                              d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z"
                                              fill="#787486"
                                            />
                                          </svg>
                                          <p className="text-[#787486] font-medium text-xs">
                                            {item.comments} comments
                                          </p>
                                        </button>
                                        <button className="flex items-center gap-2">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.3334 7.33334V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66667C1.00008 2 1.66674 1.33334 4.33341 1.33334H5.33341C6.33341 1.33334 6.55341 1.62667 6.93341 2.13334L7.93341 3.46667C8.18674 3.8 8.33341 4 9.00008 4H11.0001C13.6667 4 14.3334 4.66667 14.3334 7.33334Z"
                                              stroke="#787486"
                                              strokeMiterlimit="10"
                                            />
                                            <path
                                              d="M5.33333 1.33334H11.3333C12.6667 1.33334 13.3333 2 13.3333 3.33334V4.25334"
                                              stroke="#787486"
                                              strokeMiterlimit="10"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              d="M9.33333 10H6"
                                              stroke="#787486"
                                              strokeMiterlimit="10"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                          <p className="text-[#787486] font-medium text-xs">
                                            {item.files} files
                                          </p>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default CardsContainer;

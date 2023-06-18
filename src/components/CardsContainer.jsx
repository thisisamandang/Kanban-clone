import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getColumnClass, getColumnStyles } from "./getColumnClass";
// import { v4 as uuidv4 } from "uuid";
import { sampleColumns } from "../data/data";

// const itemsFromBackend = [
//   {
//     id: "item-1",
//     priority: "Low",
//     title: "Brainstorming",
//     content: "Brainstorming brings team members' diverse experience into play",
//     // dp: [pp1, pp2, pp3],
//     comments: "12",
//     files: "0",
//   },
//   { id: uuidv4(), content: "Second task" },
//   { id: uuidv4(), content: "Third task" },
//   { id: uuidv4(), content: "Fourth task" },
//   { id: uuidv4(), content: "Fifth task" },
// ];
// const itemsProgress = [
//   { id: uuidv4(), content: "First task" },
//   { id: uuidv4(), content: "Second task" },
//   { id: uuidv4(), content: "Third task" },
//   { id: uuidv4(), content: "Fourth task" },
//   { id: uuidv4(), content: "Fifth task" },
// ];
// const itemsDone = [
//   { id: uuidv4(), content: "First task" },
//   { id: uuidv4(), content: "Second task" },
//   { id: uuidv4(), content: "Third task" },
//   { id: uuidv4(), content: "Fourth task" },
//   { id: uuidv4(), content: "Fifth task" },
// ];

// const columnsFromBackend = {
//   ["column-1"]: {
//     name: "To do",
//     items: itemsFromBackend,
//   },
//   ["column-2"]: {
//     name: "In Progress",
//     items: itemsProgress,
//   },
//   ["column-3"]: {
//     name: "Done",
//     items: itemsDone,
//   },
// };

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

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
    <div
      className="flex my-10 mx-10 $
      )}   justify-around md:flex-row sm:flex-col xs:flex-col ss:flex-col gap-4 md:w-auto rounded-2xl"
    >
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div key={columnId}>
              <div
                className={`m-2 sm:-auto w-96  p-2 rounded-2xl ${getColumnClass(
                  column.name
                )}`}
              >
                <div className="flex justify-between mt-2 items-center">
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
                    <div className="bg-[#E0E0E0] font-medium text-[#625F6D] text-xs rounded-xl w-5 h-5 px-1.5 py-0.5">
                      <span>{column.items.length}</span>
                    </div>
                  </div>
                  <div>
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
                        className="bg-[#F5F5F5] p-5  flex flex-col items-center justify-center "
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
                                    className="flex-grow my-4 rounded-2xl w-72 p-4"
                                    style={{
                                      userSelect: "none",

                                      // margin: "8px 8px 8px 8px",
                                      minHeight: "100px",
                                      backgroundColor: "#FFFFFF",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <div className="flex items-center justify-between">
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
                                    <div>
                                      <div>
                                        <h3 className="font-semibold text-lg text-[#0D062D]">
                                          {item.title}
                                        </h3>
                                      </div>
                                      <div>
                                        <p className="text-[#787486] font-normal text-xs">
                                          {item.content}
                                        </p>
                                      </div>
                                    </div>
                                    {/* Thumbnails */}
                                    <div>
                                      {item.thumbnailURL ? (
                                        <div>
                                          <img
                                            src={item.thumbnailURL}
                                            alt=""
                                            className="rounded-lg"
                                          />
                                        </div>
                                      ) : null}
                                    </div>
                                    {/* Profiles , comments , files */}
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

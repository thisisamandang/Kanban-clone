export function getColumnClass(columnName) {
  switch (columnName) {
    case "To Do":
      return "todo-column";
    case "In Progress":
      return "in-progress-column";
    case "Done":
      return "done-column";
    default:
      return "todo-column";
  }
}
export function getColumnStyles(columnName) {
  switch (columnName) {
    case "To Do":
      return "todo-style";
    case "In Progress":
      return "inprogress-style";
    case "Done":
      return "done-style";
    default:
      return "todo-style";
  }
}

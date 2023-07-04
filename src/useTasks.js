import { useEffect } from "react";

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

return {
  tasks,
};
export default useTasks;

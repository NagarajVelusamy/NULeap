import { useSelector } from "react-redux";
import Column from "./Column";
import { RootState } from "../redux/store";
import { enumStatus } from "../types/status";

const KanbanBoard = () => {
  const { backlog, todo, inprogress, done } = useSelector(
    (state: RootState) => state.tasks
  );

  return (
    <div className="min-h-[600px] flex">
      <Column title="Backlog" type={enumStatus.Backlog} taskList={backlog} />
      <Column title="To Do" type={enumStatus.Todo} taskList={todo} />
      <Column
        title="In Progress"
        type={enumStatus.InProgress}
        taskList={inprogress}
      />
      <Column title="Done" type={enumStatus.Done} taskList={done} />
    </div>
  );
};

export default KanbanBoard;

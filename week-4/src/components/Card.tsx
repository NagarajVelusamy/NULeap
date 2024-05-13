import { useDispatch } from "react-redux";
import { TStatus, enumStatus } from "../types/status";
import { TTask } from "../types/task";
import Button from "./Button";
import { deleteTask, updateTaskType } from "../redux/features/task/taskSlice";

type TCard = {
  type: TStatus;
  task: TTask;
};

const fieldOrder: TStatus[] = Object.values(enumStatus);

const Card = ({ type, task }: TCard) => {
  const dispatch = useDispatch();

  const handleMoveTaskToNextColumn = () => {
    const currentIndex = fieldOrder.indexOf(type);

    if (currentIndex === -1 || currentIndex === fieldOrder.length - 1) {
      return; // Handle unexpected cases or if the current field is the last one
    }

    const newType = fieldOrder[currentIndex + 1];

    dispatch(
      updateTaskType({
        task,
        newType,
      })
    );
  };

  const handleMoveTaskToPrevColumn = () => {
    const currentIndex = fieldOrder.indexOf(type);

    if (currentIndex === -1 || currentIndex === 0) {
      return; // Handle unexpected cases or if the current field is the first one
    }

    const newType = fieldOrder[currentIndex - 1];

    dispatch(
      updateTaskType({
        task,
        newType,
      })
    );
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task));
  };

  return (
    <div
      className="border border-gray-800 border-solid rounded py-2 px-4 relative group hover:-translate-y-1"
      id={task.id}
    >
      <img
        src="/delete.svg"
        alt="delete icon"
        width={20}
        height={20}
        className="hidden absolute right-3 cursor-pointer group-hover:block"
        onClick={handleDeleteTask}
      />
      <div className="mb-4 break-all">{task.title}</div>
      <div className="flex justify-between">
        <Button
          disabled={type === enumStatus.Backlog}
          onClick={handleMoveTaskToPrevColumn}
        >
          &larr; Prev
        </Button>
        <Button
          disabled={type === enumStatus.Done}
          onClick={handleMoveTaskToNextColumn}
        >
          Next &rarr;
        </Button>
      </div>
    </div>
  );
};

export default Card;

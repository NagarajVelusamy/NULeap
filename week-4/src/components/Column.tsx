import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import { TStatus } from "../types/status";
import { TTask } from "../types/task";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/task/taskSlice";

type TCoulmn = {
  title: string;
  type: TStatus;
  taskList: TTask[];
};

const Column = ({ title, type, taskList }: TCoulmn) => {
  const [newTask, setNewTask] = useState<string>("");
  const dispatch = useDispatch();

  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const task = {
      id: uuidv4(),
      title: newTask,
      type: type,
    };
    dispatch(addTask(task));
    setNewTask("");
  };

  return (
    <div className="flex-1 border-2 border-black border-solid ">
      <h2
        className={`text-center text-lg font-semibold border-b-2 border-black border-solid p-2`}
      >
        {title}
      </h2>
      <div className="p-2 flex flex-col gap-3">
        <form
          className="border border-gray-800 border-solid rounded py-2 px-4"
          onSubmit={handleCreateNewTask}
        >
          <input
            className="border-none focus:outline-none w-full"
            placeholder="+ Create a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <div className={newTask === "" ? "hidden" : ""}>
            <div className="flex justify-end gap-3 mt-3">
              <Button disabled={newTask === ""} onClick={() => setNewTask("")}>
                Clear
              </Button>
              <Button disabled={newTask === ""} type="submit">
                Create
              </Button>
            </div>
          </div>
        </form>
        {taskList?.map((task) => (
          <Card type={type} task={task} />
        ))}
        {taskList?.length === 0 && (
          <p className="text-center mt-36 text-gray-400 text-lg ">
            No tasks in this section
          </p>
        )}
      </div>
    </div>
  );
};

export default Column;

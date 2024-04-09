import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import styles from "./App.module.css";
import "./global.css";
import { Button } from "./components/Button";
import { Info } from "./components/List/Info";
import { Empty } from "./components/List/Empty";
import { Task } from "./components/List/Task";
import { useState } from "react";

export interface ITask {
  id: number;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  const completedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isCompleted) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleAddTask() {
    if (!inputValue) {
      alert("Please, type a task to create.");
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isCompleted: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function handleRemoveTask(id: number) {
    if (!confirm("Are you sure you want to delete this task?")) {
      return;
    }

    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskCreation}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={handleAddTask}>
            Create
            <PlusCircle size={16} color="#F2F2F2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <Info
            createdTasks={tasks.length}
            completedTasks={completedTasksCounter}
          />
          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </>
  );
}

export default App;

"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tabOptions = ["All", "Active", "Complete"];

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [tab, setTab] = useState("All");

  const filteredTodos = todos.filter((todo) => {
    if (tab === "Active") return !todo.completed;
    if (tab === "Complete") return todo.completed;
    return true;
  });

  const addTodo = () => {
    if (!value.trim()) return;

    setTodos([
      ...todos,
      { text: value, completed: false }
    ]);
    setValue("");
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="w-screen flex justify-center py-10">
      <Card className="w-[400px]">
        <CardHeader>
          <h1 className="text-xl font-semibold">Todo-List</h1>

          <input
            className="border rounded px-3 py-2 mt-3"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="New todo..."
          />

          <Button className="mt-3" onClick={addTodo}>
            Add
          </Button>
        </CardHeader>

        <CardContent>
         
          <div className="flex mb-4">
            {tabOptions.map((t) => (
              <Button
                key={t}
                variant={tab === t ? "default" : "ghost"}
                className="flex-1"
                onClick={() => setTab(t)}
              >
                {t}
              </Button>
            ))}
          </div>

          
          <div className="flex flex-col gap-2">
            {filteredTodos.map((todo, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(index)}
                />
                <span
                  className={todo.completed ? "line-through text-gray-400" : ""}
                >
                  {todo.text}
                </span>
              </label>
            ))}
          </div>
        </CardContent>

        <CardDescription className="text-center py-3">
          Powered by Pinecone academy
        </CardDescription>
      </Card>
    </div>
  );
};

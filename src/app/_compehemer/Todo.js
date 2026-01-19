"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { Ghost } from "lucide-react";

const tabOptions =["All", "Active", "Complete"];

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    console.log(Todo)
    return (
        <div className="w-screen h-[400] flex justify-center py-2">
            <Card className="w-[400px] h-fit">
                <CardHeader>
                    <h1>Todo-List</h1>
                    <div className="flex gap-4"></div>
                    <input className="flex-1" value={value} onChange={(e) => {
                        setValue(e.target.value)
                    }}></input>
                   <Button ocClick={()=> {
                    setTodos([...todos, value]);
                    setValue("");
                   }} 
                   >Add</Button>

                </CardHeader>
                <CardContent>
                    <div className="flex">
                        {tabOptions.map((tab) => (
                            <Button key={tab} variant="ghost" className="flex-1" >{tab}</Button>
                        ))};
                    </div>
                    <div className="flex flex-col ">
                        {todos.map((item,index)=> (
                            <div key={index}>{item}</div>
                        ))}
                    </div>
                </CardContent>
                <CardDescription className="flex items-center justify-center">Powered by Pinecone academy</CardDescription>
            </Card>
        </div>
    );
};
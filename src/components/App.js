import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks,setTasks]=useState(TASKS);
const [selectedCategory,setSelectedCategory] =useState('All');

const handleTaskFormSubmit =(text,category )=>{
  const newTask={text,category};
  setTasks([...tasks,newTask]);
};

const handleCategoryFilterChange=(category) =>{
  setSelectedCategory(category);
}
const filteredTasks=
selectedCategory==='All'
? tasks
: tasks.filter((task)=> task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onCategoryFilterChange={handleCategoryFilterChange}
      />
      <NewTaskForm />
      <TaskList tasks={filteredTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}

export default App;

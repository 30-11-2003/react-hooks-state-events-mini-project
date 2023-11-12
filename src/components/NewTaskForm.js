import React ,{useState}from "react";

function NewTaskForm({categories ,onTaskFormSubmit}) {
const [text,setText] =useState ('');
const [category,setCategory] = useState(categories[0]);

const handleTextChange=(e) =>{
  setText(e.target.value)
};

const handleCategoryChange =(e)=> {
  setCategory(e.target.value);
};

const handleSubmit =(e) =>{
  e.preventDefault();
  onTaskFormSubmit(text,category);
  setText('')
};

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} name="text" onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categories.map ((cat,index)=> (
            <option key={index} value={cat}>
              {cat}
              </option> 
          ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

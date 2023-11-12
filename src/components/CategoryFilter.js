import React from "react";

function CategoryFilter({categories,selectedCategory, onCategoryFilterChange }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      <button
      className={selectedCategory === 'All' ? 'selected' : ''}
      onClick={()=>onCategoryFilterChange('All')}
      > All</button>
      {categories.map((category,index)=> (
        <button
         key={index} 
         className={selectedCategory === category ? 'selected' : ''}
         onClick={()=> onCategoryFilterChange(category)}
        >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;

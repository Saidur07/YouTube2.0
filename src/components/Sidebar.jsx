import React from "react";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <div
    className="overflow-y-auto h-[95%] flex flex-col"
  >
    {categories.map((category) => (
      <button
        className="category-btn "
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#1b9ff1",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "#1b9ff1", marginRight: "15px",  }} className="gradient-text">
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8", fontWeight: "bold"}}  >
          {category.name}
        </span>
      </button>
    ))}
  </div>
);

export default Categories;

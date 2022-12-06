import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory, collapse,  }) => {
  const navigate = useNavigate()
  const location = useLocation()
  return(
  <><div
      className="overflow-y-auto hidden lg:flex h-[95%]  flex-col  transition-all duration-150 ease-out rounded-lg"
    >


      {categories.map((category) => (
        <button
          className={`category-btn  `}
          onClick={() => {
            if (location?.pathname !== "/") {
              navigate("/");
              setSelectedCategory(category.name);
            } else {
              setSelectedCategory(category.name);
            }
          } }
          style={{
            background: category.name === selectedCategory && "#1b9ff1",
            color: "white",
          }}
          key={category.name}
        >   {collapse ? <span style={{ color: category.name === selectedCategory ? "white" : "#1b9ff1", }} className="gradient-text">
          {category.icon}
        </span> : <><span style={{ color: category.name === selectedCategory ? "white" : "#1b9ff1", marginRight: "15px", }} className="gradient-text">
          {category.icon}
        </span><span style={{ opacity: category.name === selectedCategory ? "1" : "0.8", fontWeight: "bold" }}>
            {category.name}
          </span></>}


        </button>
      ))}
    </div><div
      className="overflow-y-hidden overflow-x-scroll flex lg:hidden w-[90vw]   transition-all duration-150 ease-out rounded-lg"
    >


        {categories.map((category) => (
          <button
            className={`category-btn  whitespace-nowrap`}
            onClick={() => {
              if (location?.pathname !== "/") {
                navigate("/");
                setSelectedCategory(category.name);
              } else {
                setSelectedCategory(category.name);
              }
            } }
            style={{
              background: category.name === selectedCategory && "#1b9ff1",
              color: "white",
            }}
            key={category.name}
          >    <><span style={{ color: category.name === selectedCategory ? "white" : "#1b9ff1", marginRight: "5px", }} className="gradient-text">
            {category.icon}
          </span><span style={{ opacity: category.name === selectedCategory ? "1" : "0.8", fontWeight: "bold" }}>
              {category.name}
            </span></>


          </button>
        ))}
      </div></>
)};

export default Categories;

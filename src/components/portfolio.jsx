import React from "react";
import portfolio from "../data/portfolio.js";
import PortfolioItem from "./PortfolioItem";
function Portfolio() {
  return(
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {portfolio.map(project =>(
        <PortfolioItem
          imgUrl={project.imgUrl}
          title={project.title}
          stack={project.stack}
          link={project.link}

        />
      ))}
      
      </div>
      
    </div>
  
  )
}
export default Portfolio;

import React from "react";
import "./List.css";

const List = () => {
  return (
    <div className="container">
      <div className="list">
        <div className="text" style={{ width: "48px" }}> {/* Уменьшаем на 20% */}
          Акции
        </div>
        <div className="text" style={{ width: "90.4px" }}> {/* Уменьшаем на 20% */}
          Популярное
        </div>
        <div className="text" style={{ width: "136.8px" }}> {/* Уменьшаем на 20% */}
          Рекомендованные
        </div>
        <div className="text" style={{ width: "121.6px" }}> {/* Уменьшаем на 20% */}
          По лучшей цене
        </div>
      </div>
    </div>
  );
};

export default List;

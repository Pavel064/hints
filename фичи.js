// Скрывающийся список

import React from "react";

const ErrorTable = () => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  return (
    <div className="item ErrorTable">
      <b>Сортировка по:</b>
      <span onClick={() => setVisiblePopup(!visiblePopup)}>популярности</span>

      {visiblePopup && (
        <div className="sort_popup">
          <ul>
            <li className="active">популярности</li>
            <li>цене</li>
            <li>алфавиту</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ErrorTable;

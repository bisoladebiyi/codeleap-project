import React, { FunctionComponent } from "react";
import { IPaginationWidget } from "../../../utils/interfaces/interfaces";
import "./PaginationWidget.scss";

const PaginationWidget: FunctionComponent<IPaginationWidget> = ({
  handlePageChange,
  pageNo,
  isPrevAvailable,
  isNextAvailable,
}) => {
  return (
    <div className="PaginationWidget">
      <button
        className="PaginationWidget-Buttons"
        disabled={pageNo === 1 || !isPrevAvailable}
        onClick={() => handlePageChange("prev")}
      >
        {"<"}
      </button>
      <p>{pageNo}</p>
      <button
        className="PaginationWidget-Buttons"
        disabled={!isNextAvailable}
        onClick={() => handlePageChange("next")}
      >
        {">"}
      </button>
    </div>
  );
};

export default PaginationWidget;

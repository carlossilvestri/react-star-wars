import React, { useContext } from "react";
import { PageContext } from "../context/PageContext";
// import { Alert } from "./modals/Alert";

export const Pagination = (props) => {
  const { page, setPage, totalPage } = useContext(PageContext);
  const previousPage = () => {
    const newActualPage = page - 1;
    if (newActualPage === 0) return;
    setPage(newActualPage);
  };
  const nextPage = () => {
    const newActualPage = page + 1;
    if (newActualPage > totalPage) {
      return;
    }
    setPage(newActualPage);
  };
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item" onClick={previousPage}>
                <div className="page-link pointer" aria-label="Previous">
                  <span className="sr-only">Previous</span>
                </div>
              </li>
              <li className="page-item" onClick={nextPage}>
                <div className="page-link pointer" aria-label="Next">
                  <span className="sr-only">Next</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
};

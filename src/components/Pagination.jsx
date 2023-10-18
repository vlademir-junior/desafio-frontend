import React from 'react';

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}) {
  return (
    <div className="row pagination">
      <div className="d-flex">
        <div className="col-md-4 d-flex justify-content-start align-items-center">
          {currentPage > 1 && (
            <button
              className="btn btn-primary"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Anterior
            </button>
          )}
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <p>Página {currentPage} de {totalPages}</p>
        </div>
        <div className="col-md-4 d-flex justify-content-end align-items-center">
          {currentPage < totalPages && (
            <button
              className="btn btn-primary"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Próxima
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

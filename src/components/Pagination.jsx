// Pagination.js
import React from 'react';

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}) {

  return (
    <div className="pagination">
      <div className="row">
        <div className="col-md-4 text-left">
          {currentPage > 1 && (
            <button
              className="btn btn-primary"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Anterior
            </button>
          )}
        </div>
        <div className="col-md-4 text-center">
          <p>Página {currentPage} de {totalPages}</p>
        </div>
        <div className="col-md-4 text-right">
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

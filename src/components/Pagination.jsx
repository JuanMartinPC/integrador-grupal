import React from 'react'

export const Pagination = ({ productsPerPage, totalProducts, currentPage, setCurrentPage }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <nav className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
        {/* Validación del botón "Anterior" */}
        <button
            className={`pagination-previous ${currentPage === 1 ? 'disabled' : '' }`}
            onClick={currentPage > 1 ? onPreviousPage : null} // Deshabilitar el botón si currentPage es 1
        >
            Anterior
        </button>
        {/* Validación del botón "Siguiente" */}
        <button
            className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`}
            onClick={currentPage < pageNumbers.length ? onNextPage : null} // Deshabilitar el botón si currentPage es igual o mayor al número máximo de páginas
        >
            Siguiente
        </button>
        <ul className="pagination-list">
            {pageNumbers.map(noPage => (
                <li key={noPage}>
                    <a
                        className={`pagination-link ${noPage === currentPage ? "is-current" : ""}`}
                        onClick={() => onSpecificPage(noPage)}
                    >
                        {noPage}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    )
};
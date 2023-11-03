// Create navigation tabs to be applied to a header
function Navigation({ currentPage, handlePageChange }) {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume']

  return (
    <ul className="nav nav-tabs">
      {pages.map((page) => (
        <li className="nav-item" key={page}>
              <a
                href={`#${page}`}
                onClick={() => handlePageChange(page)}
                className={currentPage === page ? 'nav-link active' : 'nav-link'}
              >
                {page}
              </a>
            </li>
      ))}
    </ul>
  );
}

export default Navigation;

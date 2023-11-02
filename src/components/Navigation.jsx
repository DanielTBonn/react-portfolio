// Create navigation tabs to be applied to a header
function Navigation({ currentPage, handlePageChange }) {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume']

  return (
    <ul className="nav nav-tabs">
      {pages.map((page) => (
        <li className="nav-item">
              <a
                href={`#${page}`}
                onClick={() => handlePageChange(page)}
                //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

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

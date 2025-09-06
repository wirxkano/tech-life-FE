import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  isLoading = false,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingPage, setPendingPage] = useState(null);

  const handlePageChange = async (newPage) => {
    if (
      newPage === currentPage ||
      isTransitioning ||
      newPage < 1 ||
      newPage > totalPages
    ) {
      return;
    }

    setIsTransitioning(true);
    setPendingPage(newPage);

    // Add a small delay for smooth transition
    setTimeout(() => {
      setCurrentPage(newPage);
    }, 100);
  };

  // Reset transition state when page changes
  useEffect(() => {
    if (currentPage === pendingPage || pendingPage === null) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPendingPage(null);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [currentPage, pendingPage]);

  const renderPageNumbers = () => {
    let pages = [];

    if (totalPages <= 7) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pages.push(1);

      if (currentPage <= 4) {
        pages.push(2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  const getPageButtonClass = (page) => {
    const isActive = currentPage === page;
    const isPending = pendingPage === page;

    return `w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium 
      transition-all duration-300 ease-out transform
      ${
        isActive
          ? "bg-blue-600 text-white shadow-lg scale-105"
          : isPending
          ? "bg-blue-100 text-blue-600 scale-105 animate-pulse"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105 hover:shadow-md"
      }
      ${isTransitioning && !isActive && !isPending ? "opacity-70" : ""}
      ${isLoading ? "pointer-events-none opacity-50" : ""}`;
  };

  const getNavButtonClass = (disabled) => {
    return `rounded-full transition-all duration-200 ease-out
      ${
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:scale-105 hover:shadow-md active:scale-95"
      }
      ${isLoading ? "pointer-events-none opacity-50" : ""}`;
  };

  return (
    <div className="flex justify-center mt-10 gap-2">
      {/* Previous Button */}
      <button
        disabled={currentPage === 1 || isTransitioning || isLoading}
        onClick={() => handlePageChange(currentPage - 1)}
        className={`${getNavButtonClass(currentPage === 1)} 
          w-10 h-10 flex items-center justify-center border border-gray-300 bg-white`}
      >
        <ChevronLeft
          className={`w-4 h-4 transition-transform duration-200 
          ${isTransitioning ? "animate-pulse" : ""}`}
        />
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2 items-center">
        {renderPageNumbers().map((page, idx) =>
          page === "..." ? (
            <span
              key={`ellipsis-${idx}`}
              className={`px-3 py-2 text-gray-400 transition-opacity duration-300
                ${isTransitioning ? "opacity-50" : ""}`}
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={isTransitioning || isLoading}
              className={getPageButtonClass(page)}
            >
              {pendingPage === page && isTransitioning ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                page
              )}
            </button>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages || isTransitioning || isLoading}
        onClick={() => handlePageChange(currentPage + 1)}
        className={`${getNavButtonClass(currentPage === totalPages)} 
          w-10 h-10 flex items-center justify-center border border-gray-300 bg-white`}
      >
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-200 
          ${isTransitioning ? "animate-pulse" : ""}`}
        />
      </button>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center rounded-lg">
          <div className="flex items-center gap-2 text-blue-600">
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-medium">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;

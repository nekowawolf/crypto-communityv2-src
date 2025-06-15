interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const start = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const end = totalItems === 0 ? 0 : Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col items-center mt-12 mb-12">
      <span className="text-sm text-gray-400">
        Showing <span className="font-semibold text-white">{start}</span> to{' '}
        <span className="font-semibold text-white">{end}</span> of{' '}
        <span className="font-semibold text-white">{totalItems}</span> Entries
      </span>

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="prev flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-700"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="next flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-700"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages || totalItems === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
}

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function MoviePagination({ page, setPage, totalPages }) {

  const changePage = (value) => {
    if (value === 1 && page < totalPages) {
      setPage(prev => prev + 1)
    }
    if (value === -1 && page > 1) {
      setPage(prev => prev - 1)
    }
  }

  const baseStyle =
    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"

  const activeStyle =
    "bg-primary text-white shadow-md hover:bg-primary/90"

  const inactiveStyle =
    "border border-gray-300 text-gray-700 hover:bg-gray-100"

  const disabledStyle =
    "opacity-50 pointer-events-none"

  return (
    <Pagination className="my-6 flex justify-center">
      <PaginationContent className="flex items-center gap-2">

        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => changePage(-1)}
            className={`${baseStyle} ${inactiveStyle} ${page === 1 ? disabledStyle : ""}`}
          />
        </PaginationItem>

        {/* Previous Page */}
        {page > 1 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => changePage(-1)}
              className={`${baseStyle} ${inactiveStyle}`}
            >
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Current Page */}
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className={`${baseStyle} ${activeStyle}`}
          >
            {page}
          </PaginationLink>
        </PaginationItem>

        {/* Next Page */}
        {page < totalPages && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => changePage(1)}
              className={`${baseStyle} ${inactiveStyle}`}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Ellipsis */}
        {page < totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => changePage(1)}
            className={`${baseStyle} ${inactiveStyle} ${page === totalPages ? disabledStyle : ""}`}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}
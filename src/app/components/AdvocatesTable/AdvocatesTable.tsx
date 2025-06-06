import { Advocate } from "../../types";
import EmptyState from "./EmptyState";
import AdvocateRow from "./AdvocatesRow";
import { TableWrapper, Table, Thead, Tr, Th, Pagination, PaginationButton } from "./AdvocatesTable.styles";

export default function AdvocatesTable({
  loading,
  advocates,
  page,
  totalPages,
  setPage,
}: {
  loading: boolean;
  advocates: Advocate[];
  page: number;
  totalPages: number;
  setPage: (newPage: number) => void;
}) {
  return (
    <TableWrapper loading={loading}>
      <Table>
        <Thead>
          <Tr>
            <Th min="120px">First Name</Th>
            <Th min="120px">Last Name</Th>
            <Th>City</Th>
            <Th>Degree</Th>
            <Th min="300px">Specialties</Th>
            <Th>Experience</Th>
            <Th>Phone</Th>
          </Tr>
        </Thead>
        <tbody>
          {advocates.length === 0 ? (
            <EmptyState message="No advocates found for your search" />
          ) : (
            advocates.map((advocate, index) => (
              <AdvocateRow key={`${index}`} advocate={advocate} />
            ))
          )}
        </tbody>
      </Table>
      <Pagination>
        <PaginationButton onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </PaginationButton>
        <span>
          Page {page} of {totalPages}
        </span>
        <PaginationButton onClick={() => setPage(page + 1)} disabled={totalPages === 0 || page === totalPages || advocates.length === 0}
        >
          Next
        </PaginationButton>
      </Pagination>
    </TableWrapper>
  );
}
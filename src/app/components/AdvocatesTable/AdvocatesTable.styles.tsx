import styled from "styled-components";

export const TableWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "loading",
}) <{ loading: boolean }>`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
  opacity: ${({ loading }) => (loading ? 0.4 : 1)};
  transition: opacity 0.3s ease;
  position: relative;
  overflow: hidden; 
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 10px;
  font-family: "Lato", sans-serif;
  table-layout: auto;
  border-radius: 12px;
  overflow: hidden; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
`;

export const Thead = styled.thead`
  background-color: #265b4e;
  text-align: left;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 2;

  th {
    background-color: #265b4e !important;
    color: white !important;
  }
`;

export const Tr = styled.tr`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:nth-child(even) {
    background-color:rgb(246, 246, 244);
  }

  &:hover {
    background-color: #eef4f2;
    cursor: pointer;
  }
`;

export const Th = styled.th<{ min?: string }>`
  padding: 12px 16px;
  background-color: #f9fafb;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #6b7280;
  ${({ min }) => min && `min-width: ${min};`}
`;

export const Td = styled.td`
  padding: 12px 16px;
  font-size: 16px;
  vertical-align: top;
  border-bottom: 1px solid #e0e7e9;
`;

export const SpecialtyBadge = styled.span`
  background-color: #3478661a;
  color: #347866;
  font-family: "Lato", sans-serif;
  font-size: 0.75rem;
  padding: 6px 10px;
  border-radius: 12px;
  display: inline-block;
  margin: 4px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 24px;
  gap: 8px;
  font-family: 'Lato', sans-serif;
`;

export const PaginationButton = styled.button`
  background-color: #d7a13b;
  color: black;
  padding: 6px 18px;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
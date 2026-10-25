import React from "react";
import styled from "styled-components";
import type { TableProps } from "./Table.types";

const TableContainer = styled.div`
  width: 100%;
  max-width: 900px;
  overflow-x: auto;
`;

const StyledTable = styled.table<{
  $backgroundColor: string;
  $textColor: string;
  $disabled: boolean;
}>`
  width: 100%;
  border-collapse: collapse;

  background-color: ${(props) =>
    props.$disabled ? "grey" : props.$backgroundColor};

  color: ${(props) =>
    props.$disabled ? "white" : props.$textColor};

  cursor: ${(props) =>
    props.$disabled ? "not-allowed" : "default"};

  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};

  th,
  td {
    border: 1px solid #dddddd;
    padding: 12px;
    text-align: left;
  }

  th {
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.1);
  }

  tfoot td {
    font-weight: bold;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 600px) {
    th,
    td {
      padding: 8px;
      font-size: 12px;
    }
  }
`;

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  footer = "End of Table",
  backgroundColor = "white",
  textColor = "black",
  disabled = false,
}) => {
  return (
    <TableContainer>
      <StyledTable
        $backgroundColor={backgroundColor}
        $textColor={textColor}
        $disabled={disabled}
        aria-disabled={disabled}
      >
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={headers.length || 1}>{footer}</td>
          </tr>
        </tfoot>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
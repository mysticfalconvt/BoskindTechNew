import React, { useMemo } from 'react';
import Table from './Table';

export default function LinksTableSearchable({ links }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Links',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
            Cell: ({ row }) => (
              <a href={`${row.original.url}`}>{row.original.name}</a>
            ),
          },

          {
            Header: 'Description',
            accessor: 'description',
            Cell: ({ row }) => (
              <a href={`${row.original.url}`}>{row.original.description}</a>
            ),
          },
        ],
      },
    ],
    []
  );

  return (
    <div>
      <Table data={links} columns={columns} searchColumn="name" />
    </div>
  );
}

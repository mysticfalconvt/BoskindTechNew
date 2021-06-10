import React, { useMemo } from 'react';
import Table from './Table';

export default function BooksTable({ books }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Books',
        columns: [
          {
            Header: 'Title',
            accessor: 'title',
            // Cell: ({ row }) => (
            //   <a href={`${row.original.url}`}>{row.original.name}</a>
            // ),
          },
          {
            Header: 'Author',
            accessor: 'properties.Author.value[0].name',
          },

          {
            Header: 'Rating',
            accessor: 'properties.Score__5.value.name',
            // Cell: ({ row }) => {
            //   console.log(row.original);
            //   return <>{row.original?.properties.Score__5?.value?.name}</>;
            // },
          },

          {
            Header: 'Date Read',
            accessor: 'properties.Finished_on.value.start',
          },
        ],
      },
    ],
    []
  );

  return (
    <div>
      <Table data={books} columns={columns} searchColumn="title" />
    </div>
  );
}

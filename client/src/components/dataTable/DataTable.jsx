import './dataTable.scss';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'name', headerName: 'Nom', width: 130 },
  { field: 'menu', headerName: 'Menu', width: 100 },
];

const rows = [
  { id: 1, date: '27 mars 2023', name: 'Tafita', menu: 'M1E' },
  { id: 2, date: '27 mars 2023', name: 'Tafita', menu: 'M1E' },
  { id: 3, date: '27 mars 2023', name: 'Tafita', menu: 'M1E' },
  { id: 4, date: '27 mars 2023', name: 'Tafita', menu: 'M1E' },
  { id: 5, date: '27 mars 2023', name: 'Tafita', menu: 'M1E' },
  { id: 6, date: '27 mars 2023', name: 'Tafita', menu: 'M1E' },
  { id: 7, date: '27 mars 2023', name: 'Tafita', menu: 'M1E' },
  { id: 8, date: '27 mars 2023', name: 'Tafita', menu: 'M1E' },
  { id: 9, date: '27 mars 2023', name: 'Tafita', menu: 'M1E' },
  { id: 10, date: '27 mars 2023', name: 'Tafita', menu: 'M1E' },
];

export default function DataTable() {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="editButton">Edit</div>
            <div className="deleteButton">Suppr</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

import React, { useState } from 'react'
import { sampledata } from './sampledata'
import DataTable from 'react-data-table-component'

const ReactDatatable = () => {
  const [tableData, setTableData] = useState(sampledata)

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  }

  const columns = [
    {
      name: 'First_name',
      selector: 'first_name',
      sortable: true,
    },

    {
      name: 'Last_name',
      selector: 'last_name',
      sortable: true,
      right: true,
    },
    {
      name: 'Address',
      selector: 'address',
      sortable: true,
      right: true,
    },

    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
      right: true,
    },
  ]
  return (
    <>
      <DataTable
        title='Employees data'
        columns={columns}
        data={tableData}
        selectableRows
        selectableRowsComponentProps={{ inkDisabled: true }}
        customStyles={customStyles}
      />
    </>
  )
}

export default ReactDatatable

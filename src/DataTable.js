import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MDBDataTableV5 } from 'mdbreact'
import { sampledata } from './sampledata'

const DataTable = () => {
  const [tableData, setTableData] = useState(sampledata)

  //   useEffect(async () => {
  //     const { data } = await axios.get('https://yopro.app/api/proveedores')
  //     console.log('data', data)
  //     setTableData(data)
  //   }, [])

  const data = {
    columns: [
      {
        label: 'First_name',
        field: 'first_name',
        sort: 'asc',
      },
      {
        label: 'Last_name',
        field: 'last_name',
      },
      {
        label: 'Address',
        field: 'address',
      },
      {
        label: 'Phone',
        field: 'phone',
      },
    ],

    rows: tableData?.map((emp) => {
      return {
        first_name: emp.first_name,
        last_name: emp.last_name,
        address: emp.address,
        phone: emp.phone,
      }
    }),
  }
  return (
    <>
      {tableData && (
        <MDBDataTableV5 data={data} searchTop searchBottom={false} />
      )}
    </>
  )
}

export default DataTable

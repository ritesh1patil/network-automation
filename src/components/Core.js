import React from 'react';
import Box from '@mui/material/Box';
// import Chart from 'react-apexcharts';

// export default function Core() {
//   // Data and configuration for the first chart
//   const totalActiveUserOptions = {
//     chart: {
//       id: 'total-active-user',
//     },
//     xaxis: {
//       categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     },
//   };

//   const totalActiveUserSeries = [
//     {
//       name: 'Total Active User',
//       data: [2500, 3000, 3500, 4000, 4500, 5000, 7500],
//     },
//   ];

//   // Data and configuration for the second chart
//   const configChangeOptions = {
//     chart: {
//       id: 'config-change',
//     },
//     xaxis: {
//       categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     },
//   };

//   const configChangeSeries = [
//     {
//       name: 'Config Change',
//       data: [2500, 3000, 3500, 4000, 4500, 5000, 7500],
//     },
//   ];

//   return (
//     <>
//       <Box height={50} />
//       <h1>Core</h1>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
//         <div style={{ width: '582px', height: '206px' }}>
//           <h3>Total Active User</h3>
//           <Chart
//             options={totalActiveUserOptions}
//             series={totalActiveUserSeries}
//             type="line"
//             width="582"
//             height="206"
//           />
//         </div>
//         <div style={{ width: '582px', height: '206px' }}>
//           <h3>Config Change</h3>
//           <Chart
//             options={configChangeOptions}
//             series={configChangeSeries}
//             type="line"
//             width="582"
//             height="206"
//           />
//         </div>
//       </div>
//     </>
//   );
// }
// import React from 'react'

function Core() {
  return (
    <>
    <Box height={50}/>
     <h1 style={{fontFamily:"poppins"}}>Core</h1>
     </>
  )
}

export default Core

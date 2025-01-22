// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function Info() {
//   // Generate random data
//   const generateRandomData = () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

//   // Chart data
//   const data = {
//     labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Days of the week
//     datasets: [
//       {
//         label: 'Random Data',
//         data: generateRandomData(),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Chart options
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Random Data Bar Chart',
//       },
//     },
//   };

//   return (
//     <div style={{ width: '80%', margin: '0 auto', marginTop: '50px' }}>
//       <h2>Charts Page</h2>
//       <Bar data={data} options={options} />
//     </div>
//   );
// }

// export default Info;

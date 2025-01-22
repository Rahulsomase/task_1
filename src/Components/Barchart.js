// import React from 'react';
// import { Bar, Line, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto';
// import '../Barchart.css';
// import Header from './Header';
// import Footer from './Footer';

// const barData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [{
//         label: 'Monthly Revenue',
//         data: [65, 59, 80, 81, 56, 55],
//         backgroundColor: 'rgba(78, 115, 223, 0.5)',
//         borderColor: 'rgba(78, 115, 223, 1)',
//         borderWidth: 1
//     }]
// };

// const lineData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [{
//         label: 'Sales Growth',
//         data: [45, 39, 60, 71, 46, 85],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//     }]
// };

// const pieData = {
//     labels: ['Red', 'Blue', 'Yellow'],
//     datasets: [{
//         data: [300, 50, 100],
//         backgroundColor: [
//             'rgb(255, 99, 132)',
//             'rgb(54, 162, 235)',
//             'rgb(255, 205, 86)'
//         ]
//     }]
// };

// const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//         legend: {
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Chart Overview'
//         }
//     }
// };

// function Barchart() {
//     return (
//         <div className="dashboard-container">
//             <Header />
//             <div className="charts-grid">
//                 <div className="chart-box">
//                     <h3>Revenue Bar Chart</h3>
//                     <Bar data={barData} options={options} />
//                 </div>
//                 <div className="chart-box">
//                     <h3>Sales Line Chart</h3>
//                     <Line data={lineData} options={options} />
//                 </div>
//                 <div className="chart-box">
//                     <h3>Distribution Pie Chart</h3>
//                     <Pie data={pieData} options={options} />
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Barchart;



// ========================================




import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../Barchart.css'
import Footer from './Footer';
import Header from './Header';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Charts() {

   

  // Generate random data for each chart
  const generateRandomData = () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

  // Data and options for the first chart
  const chart1Data = {
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    datasets: [
      {
        label: 'Chart 1 Dataset',
        data: generateRandomData(),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data and options for the second chart
  const chart2Data = {
    labels: ['Cliet X', 'client Y', ' client Z', 'client W', 'client V'],
    datasets: [
      {
        label: 'Chart 2 Dataset',
        data: generateRandomData(),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data and options for the third chart
  const chart3Data = {
    labels: ['Rev 2021', 'Rev 2022', 'Rev 2023', 'Rev 2024', 'Rev 2025'],
    datasets: [
      {
        label: 'Chart 3 Dataset',
        data: generateRandomData(),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Common options for all charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
  
   
    <div className="charts-container">
      <div>
        <body className="sb-nav-fixed">
          <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <div>
              <Header/>
            </div>
          </nav>
          <h2>Multiple Bar Charts</h2>
          <div className="chart">
            <Bar data={chart1Data} options={options} />
            <h3 style={{ textAlign: 'center' }}>Employee data</h3>
          </div>
          <div className="chart">
            <Bar data={chart2Data} options={options} />
            <h3 style={{ textAlign: 'center' }}>Client data</h3>
          </div>
          <div className="chart">
            <Bar data={chart3Data} options={options} />
            <h3 style={{ textAlign: 'center' }}>Revenue data</h3>   
          </div>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <Footer/>
            </div>
          </footer>
        </body>
      </div>
    </div>

    
  );
}

export default Charts;

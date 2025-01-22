import React, { useEffect } from "react";
import { Chart as ChartJS } from 'chart.js';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";

const Chart = () => {

return(

 
  <div className="App">

<body className="sb-nav-fixed">
<nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <div>
                    <Header/>
                </div>
            </nav>
  <div id="layoutSidenav">
                <div>
                    <Sidebar/>
                 </div>
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Charts</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Charts</li>
          </ol>
          <div className="card mb-4">
            <div className="card-body">
              Chart.js is a third party plugin that is used to generate the
              charts in this template. The charts below have been customized -
              for further customization options, please visit the official
              <a target="_blank" href="https://www.chartjs.org/docs/latest/">
                Chart.js documentation
              </a>
              .
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-area me-1" />
              Area Chart Example
            </div>
            <div className="card-body">
              <canvas id="myAreaChart" width="100%" height={30} />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-bar me-1" />
                  Bar Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myBarChart" width="100%" height={50} />
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-chart-pie me-1" />
                  Pie Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myPieChart" width="100%" height={50} />
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <Footer/>
                        </div>
                    </footer>
    </div>
  </div>

  </body>
    </div>

   
)

}

export default Chart;

// ==========================================================================================



// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function Chart() {
//   // Generate random data for each chart
//   const generateRandomData = () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

//   // Data and options for the first chart
//   const chart1Data = {
//     labels: ['A', 'B', 'C', 'D', 'E'],
//     datasets: [
//       {
//         label: 'Chart 1 Dataset',
//         data: generateRandomData(),
//         backgroundColor: 'rgba(255, 99, 132, 0.6)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Data and options for the second chart
//   const chart2Data = {
//     labels: ['X', 'Y', 'Z', 'W', 'V'],
//     datasets: [
//       {
//         label: 'Chart 2 Dataset',
//         data: generateRandomData(),
//         backgroundColor: 'rgba(54, 162, 235, 0.6)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Data and options for the third chart
//   const chart3Data = {
//     labels: ['P', 'Q', 'R', 'S', 'T'],
//     datasets: [
//       {
//         label: 'Chart 3 Dataset',
//         data: generateRandomData(),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Common options for all charts
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//     },
//   };

//   return (
//     <div className="charts-container">
//       <h2>Multiple Bar Charts</h2>
//       <div className="chart">
//         <Bar data={chart1Data} options={options} />
//       </div>
//       <div className="chart">
//         <Bar data={chart2Data} options={options} />
//       </div>
//       <div className="chart">
//         <Bar data={chart3Data} options={options} />
//       </div>
//     </div>
//   );
// }

// export default Chart;

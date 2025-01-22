import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import '../Barchart.css';
import Header from './Header';
import Footer from './Footer';

const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Monthly Revenue',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(78, 115, 223, 0.5)',
        borderColor: 'rgba(78, 115, 223, 1)',
        borderWidth: 1
    }]
};

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Sales Growth',
        data: [45, 39, 60, 71, 46, 85],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ]
    }]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart Overview'
        }
    }
};

function Barchart() {
    return (
        <div className="dashboard-container">
            <Header />
            <div className="charts-grid">
                <div className="chart-box">
                    <h3>Revenue Bar Chart</h3>
                    <Bar data={barData} options={options} />
                </div>
                <div className="chart-box">
                    <h3>Sales Line Chart</h3>
                    <Line data={lineData} options={options} />
                </div>
                <div className="chart-box">
                    <h3>Distribution Pie Chart</h3>
                    <Pie data={pieData} options={options} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Barchart;
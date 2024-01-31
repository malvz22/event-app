import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales',
        data: [3, 6, 7, 2, 3, 4, 4],
        backgroundColor: '#7848F4',
        bordercolor: '#7848F4',
        borderWidth: 1,
      },
      {
        label: 'Revenue',
        data: [2, 3, 4, 3, 1, 2, 2],
        backgroundColor: '#33099e',
        bordercolor: '#33099e',
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <>
      <Bar height={400} width={600} data={data} />
    </>
  );
}

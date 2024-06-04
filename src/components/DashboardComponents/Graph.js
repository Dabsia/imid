import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const Graph = () => {

    const showData = true

    const dataList = [600, 0, 0, 0, 0, 0, 0]

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: '',
                data: dataList,
                backgroundColor: '#d3d3d3',

                borderWidth: 1,
                borderRadius: 5
            }
        ]

    }

    const data2 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '',

                backgroundColor: '#d3d3d3',

                borderWidth: 1,
                borderRadius: 5
            }
        ]

    }

    const options = {

    }

    // const display = false
    return (
        <div className={`py-3 'border-2 rounded-[1rem] mt-3 `}  >

            <div className={`w-full rounded-xl flex-col flex justify-center my-5 p-2 h-fit`} >

                <Bar
                    data={showData ? data : data2}
                    options={options}
                ></Bar>
            </div>
        </div >
    )
}

export default Graph
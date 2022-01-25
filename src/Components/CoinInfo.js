import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { HistoricalChart } from '../config/api'
import { CryptoState } from '../CryptoContext'
import { Line } from "react-chartjs-2";
import { chartDays } from '../config/data';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import SelectButton from './SelectButton';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CoinInfo = ({ coin }) => {

    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1)
    // const [flag, setFlag] = useState(false);
    const { currency } = CryptoState()

    const fetchHistoricData = async () => {

        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
        setHistoricData(data.prices);
    };

    useEffect(() => {
        fetchHistoricData()
    }, [days]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='w-full mb-4 md:w-4/6 chartSection md:border-l border-secondary-col md:pl-8 '>
            {historicData && (
                <div className='relative w-11/12 mx-auto mb-4 md:w-full h-96 chart'>
                    <Line
                        data={{
                            labels: historicData.map((coin) => {
                                let date = new Date(coin[0]);
                                let time =
                                    date.getHours() > 12
                                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                        : `${date.getHours()}:${date.getMinutes()} AM`;
                                return days === 1 ? time : date.toLocaleDateString();
                            }),
                            datasets: [
                                {
                                    data: historicData.map((coin) => coin[1]),
                                    label: `Price in ${currency}`,
                                    borderColor: "orange",
                                    borderWidth: 1,
                                    fill: true,
                                },
                            ],
                        }}
                        options={{
                            elements: {
                                point: {
                                    radius: 0,
                                },
                            },
                            animation: {
                                duration: 1000,
                                easing: 'easeInBack'
                            },
                            responsive: true,
                            maintainAspectRatio: false
                        }


                        }
                    />
                </div>
            )}

            <div className='flex flex-wrap justify-center chartBtn'>
                {chartDays.map((day) => (
                    <SelectButton
                        key={day.value}
                        onClick={() => {
                            setDays(day.value);

                        }}
                        selected={day.value === days}
                    >
                        {day.label}
                    </SelectButton>))}
            </div>
        </div>
    )
}

export default CoinInfo

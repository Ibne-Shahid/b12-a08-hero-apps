import React from 'react'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const RatingChart = ({ singleApp }) => {

    const { ratings } = singleApp

    return (
        <div className='max-w-[1250px] h-[400px] mt-5'>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    layout="vertical"
                    width={1250}
                    height={400}
                    data={ratings}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >

                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="count" barSize={30} fill="#413ea0" />

                </ComposedChart>
            </ResponsiveContainer>


        </div>
    )
}

export default RatingChart
"use client"
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Index() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <div className='border-2 border-[#f0f0f0] w-full  rounded-lg'>

            <DatePicker
                className='border-none active:outline-none active:border-none focus:outline-none text-xs w-full md:text-sm'
                placeholderText='Select a date range'
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                isClearable={true}
            />
        </div>
    );
}

export default Index;

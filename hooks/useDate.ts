import React, { Dispatch, SetStateAction, useEffect} from 'react'
import { dataFormats, timeFormats } from '@/data'

type useDateType = {
    timeFormat: string,
    dataFormat: string,
    date:string,
    setDate: Dispatch<SetStateAction<string>>
    interval?: number
}

const useDate = ({timeFormat, dataFormat,date, setDate, interval = 1000}: useDateType) => {

    useEffect(() => {

        const intervalData = setInterval (() => {
            const dateNow = new Date()
            const year = dateNow.getFullYear().toString()
            const monthNumber = dateNow.getMonth()
            let month = (monthNumber + 1).toString()
            if (monthNumber < 9) {
                month = '0' + month
            }
            const dayNumber = dateNow.getDate()
            let day = dayNumber.toString()
            if (dayNumber < 10) {
                day = '0' + day
            }
            const dayNow = dateNow.getDay()
            const hoursNumber = dateNow.getHours()
            let hours = hoursNumber.toString()
            if (hoursNumber < 10) {
                hours = '0' + hours
            }
            const minutesNumber = dateNow.getMinutes()
            let minutes = minutesNumber.toString()
            if (minutesNumber < 10) {
                minutes = '0' + minutes
            }
            let formatFullDate = day + `/` + month + `/` + year
            let amPm = ''
            
        
            if (timeFormat === timeFormats[0].name) {
                if ((+hours) >= 12) {
                    amPm = 'pm'
                    hours = ((+hours) - 12).toString()
                } else if (hours === `00`) {
                    amPm = 'am'
                    hours = `12`
                } else {
                    amPm = 'am'
                }
            } 
            if (dataFormat !== dataFormats[0].name) {
                formatFullDate = formatFullDate.split('/').reverse().join('.')
            }

            let formatFullTime = hours + `:` + minutes + ` ` + amPm
            const dateNowInFormat = formatFullDate + ` ` + formatFullTime
            setDate(dateNowInFormat)
        }, interval)

          return () => clearInterval(intervalData)
       
    }, [timeFormat, dataFormat, date])

    
}

export default useDate
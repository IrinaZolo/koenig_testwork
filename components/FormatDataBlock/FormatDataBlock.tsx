'use client'

import Block from '@/components/Block/Block';
import ImgFormat from '../../assets/format.svg'
import { FormEvent, useEffect, useState } from 'react';
import SelectElement from '../SelectElement/SelectElement';
import { timeFormats, dataFormats } from '../../data'
import useDate from '@/hooks/useDate';
import { Form, DateNow } from './FormatDataBlock.styles';
import moment from 'moment'


const FormatDataBlock = () => {

    const [timeFormatSelect, setTimeFormatSelect] = useState(timeFormats[0].name)
    const [dateFormatSelect, setDateFormatSelect] = useState(dataFormats[0].name)

    const [dateNow, setDateNow] = useState('')

    const formattingDate = () => {
      let timeFormat = ''
      let dateFormat = ''
      
      if (timeFormatSelect === timeFormats[0].name) {
        timeFormat = 'hh:mm a'
      } else {
        timeFormat = 'kk:mm'
      }

      if (dateFormatSelect === dataFormats[0].name) {
        dateFormat = 'DD/MM/YYYY'
      } else {
        dateFormat = 'YYYY.MM.DD'
      }
      const formattedDate = moment().format(`${dateFormat} ${timeFormat}`)
      return formattedDate
    }

    useEffect(() => {

      const intervalDate = setInterval (() => {
        setDateNow(formattingDate)
      }, 1000)

        return () => clearInterval(intervalDate)

    }, [dateNow])



    const onClick = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault
    }

  return (
    <Block img={ImgFormat} title={"Format"}>
          <Form onClick={onClick}>
            <SelectElement
              htmlFor='timeFormat'
              label='Time format'
              options={timeFormats}
              valueOption={timeFormatSelect}
              setValueOption={setTimeFormatSelect}
            />
            <SelectElement
              htmlFor='dataFormat'
              label='Date format'
              options={dataFormats}
              valueOption={dateFormatSelect}
              setValueOption={setDateFormatSelect}
            />
          </Form>
          <DateNow>{formattingDate()}</DateNow>
      </Block>
  )
}

export default FormatDataBlock
'use client'
import styled from 'styled-components';
import Block from '@/components/Block';
import ImgFormat from '../assets/format.svg'
import { useEffect, useState } from 'react';
import SelectElement from './SelectElement';
import { timeFormats, dataFormats } from '../data'
import useDate from '@/hooks/useDate';

const Form =styled.form`
    display: flex;
    flex-direction: column;
    gap: 18px;
`
const DateNow = styled.h2`
  margin-top: 18px;
  margin-left: calc(100% - 440px);
`

const FormatDataBlock = () => {

    const [timeFormat, setTimeFormat] = useState(timeFormats[0].name)
    const [dataFormat, setDataFormat] = useState(dataFormats[0].name)

    const [date, setDate] = useState('')

    // хук для приведения даты и времени к выставленным форматам и обновлением каждую секунду
    useDate({timeFormat, dataFormat, date, setDate})


  return (
    <Block img={ImgFormat} title={"Format"}>
          <Form onClick={e => e.preventDefault}>
            <SelectElement
              htmlFor='timeFormat'
              label='Time format'
              options={timeFormats}
              valueOption={timeFormat}
              setValueOption={setTimeFormat}
            />
            <SelectElement
              htmlFor='dataFormat'
              label='Date format'
              options={dataFormats}
              valueOption={dataFormat}
              setValueOption={setDataFormat}
            />
          </Form>
          <DateNow>{date}</DateNow>
      </Block>
  )
}

export default FormatDataBlock
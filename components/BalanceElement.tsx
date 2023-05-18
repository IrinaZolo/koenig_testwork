'use client'
import { dataBalance } from "@/data"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: white;
`
const Text = styled.h2`
    margin-top: 10px;
`
const InfoElements = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px 21px;
    padding-top: 0px; 
`

const InfoElement = styled.div`
    height: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 13px;
    &:nth-child(odd) {
        background-color: #D9D9D9;
    }
    &:nth-child(even) {
        background-color: #E4E4E4;
    }
`

const BalanceElement = () => {

    const sum = dataBalance.balanceInfo.map(item => item.number).reduce((prevValue, currentValue) => {
        return prevValue + currentValue
    })

    return (
        <Container>
            <Text className="title">Balance</Text>
            <InfoElements>
                {dataBalance.balanceInfo.map(item => (
                    <InfoElement key={item.id}>
                        <h2>{item.name}</h2>
                        <h2>{item.number.toFixed(2)} GBP</h2>
                    </InfoElement>
                ))}
                <InfoElement key='total'>
                    <h2>Total</h2>
                    <h2>{sum.toFixed(2)} GBP</h2>
                </InfoElement>
            </InfoElements>
        </Container>
    )
}

export default BalanceElement
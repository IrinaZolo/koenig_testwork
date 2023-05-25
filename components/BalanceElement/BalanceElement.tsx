'use client'
import { dataBalance } from "@/data"
import { Container, Text, InfoElements, InfoElement } from "./BalanceElement.styles"

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
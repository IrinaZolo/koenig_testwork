type FormatType = {
    id: number,
    name: string,
}

export const timeFormats: FormatType[] = [
    {
        id: 1,
        name: "12-hour", 
    },
    {
        id: 2,
        name: "24-hour", 
    },

]

export const dataFormats: FormatType[] = [
    {
        id: 1,
        name: "dd/mm/yyyy", 
    },
    {
        id: 2,
        name: "yyyy.mm.dd", 
    },

]

type BalanceInfoType = {
    id: number,
    name: string,
    number: number
}

type BalanceType = {
    user: string;
    balanceInfo: BalanceInfoType[]

}

export const dataBalance: BalanceType = {
    user: 'KD27801',
    balanceInfo: [
        {
            id: 1,
            name: 'Aviable',
            number: 27.45,
        },
        {
            id: 2,
            name: 'Reserved',
            number: 0.00,
        }
    ]

}
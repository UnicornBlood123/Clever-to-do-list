const mockedResponseDays = [
    {
        id: 1,
        day:10
    },
    {
        id: 2,
        day:11
    },
    {
        id: 3,
        day:12
    },
    {
        id: 4,
        day:13
    },
    {
        id: 5,
        day:14
    },
    {
        id: 6,
        day:15
    },
    {
        id: 7,
        day:16
    }
]

export const mockedApiDays = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(mockedResponseDays), 0);
    })
}

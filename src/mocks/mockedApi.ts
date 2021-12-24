const mockedResponseDays = [
    {
        id: 1,
        day:10,
        active:true
    },
    {
        id: 2,
        day:11,
        active:false

    },
    {
        id: 3,
        day:12,
        active:false
    },
]

export const mockedApiDays = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(mockedResponseDays), 0);
    })
}

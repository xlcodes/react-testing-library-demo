const sleep = async (timer: number, result: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result)
        }, timer)
    })
}

const loopSleep = async (timer: number, result: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(result)
            setTimeout(() => {
                loopSleep(timer, result)
            }, timer)
        }, timer)
    })
}

const asyncSleep = async (timer: number, fn: () => void): Promise<void> => {
    setTimeout(() => {
        Promise.resolve().then(() => {
            fn()
        })
    }, timer)
}

export { sleep, loopSleep, asyncSleep }
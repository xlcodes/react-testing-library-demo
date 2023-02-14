import {asyncSleep, loopSleep, sleep} from "./index"

describe('examples for FakeTimer', () => {
    beforeAll(() => {
        // 将定时器替换为假定时器
        jest.useFakeTimers()
    })
    it('a test for a example setTimeout', async () => {
        const str = "this is a example setTimeout test"
        const res = sleep(6000, str)
        // 运行所有的定时器
        // jest.runAllTimers()
        // 控制定时器执行时间
        jest.advanceTimersByTime(6000)
        await expect(res).resolves.toBe(str)
    })
    it('a test for a recursion setTimeout', async () => {
        const str = "this is a recursion setTimeout test"
        const res = loopSleep(6000, str)
        // 会运行所有的定时器，不论这个定时器是否在等待中
        // jest.runAllTimers()
        // 仅运行等待的定时器
        jest.runOnlyPendingTimers()
        await expect(res).resolves.toBe(str)
    })
    it('a test for a setTimeout whit async function', async () => {
        const fn = jest.fn()
        asyncSleep(6000, fn)
        jest.runOnlyPendingTimers()
        await Promise.resolve()
        expect(fn).toBeCalled()
    })
})
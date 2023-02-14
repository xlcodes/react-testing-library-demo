import React from "react";

describe("examples for async", () => {
    it('for jest', async () => {
        const str = "this is a demo for fetching data"
        const fetchData = async () => {
            return await new Promise((resolve) => {
                resolve(str)
            })
        }
        const data = await fetchData()
        expect(data).toBe(str)
        // Jest 提供的 resolves 和 rejects 匹配器
        await expect(fetchData()).resolves.toBe(str)
        // await expect(fetchData()).rejects.toBe(str)
    })
})
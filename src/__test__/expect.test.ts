import React from "react";
describe('examples for jest expect', () => {
    it("基础类型比较", () => {
        // tobe
        expect(1 + 1).toBe(2)

        // not tobe
        expect(1 + 1).not.toBe(3)

        // boolean
        expect(true).toBe(true)
        expect(true).toBeTruthy()
        expect(false).toBeFalsy()

        // undefined
        expect(undefined).toBe(undefined)
        expect(undefined).toBeUndefined()
        expect(undefined).not.toBeDefined()

        const test = () => {
            console.log(test)
        }
        expect(test()).toBeUndefined()

        expect(null).toBe(null)

        // 浮点数
        // expect(0.1 + 0.2).toBe(0.3) // Error
        expect(0.1 + 0.2).toBeCloseTo(0.3)

        // NaN
        expect(NaN).toBe(NaN);
        expect(NaN).toBeNaN()

        // +0 -0
        expect(+0).not.toBe(-0)
    })
    it('引用类型比较', () => {
        const a = {obj1: {name: "obj1", obj2: {name: "obj2"}}};
        const b = Object.assign(a);
        const c = JSON.parse(JSON.stringify(a))
        expect(a).toBe(b)
        expect(a).not.toBe(c)
        expect(a).toEqual(b)
        expect(a).toEqual(c)

        expect(1 + 1).toEqual(2)
    })
    it('数字符号', () => {
        // >
        expect(3).toBeGreaterThan(2)
        // <
        expect(3).toBeLessThan(4)
        // >=
        expect(3).toBeGreaterThanOrEqual(3)
        expect(3).toBeGreaterThanOrEqual(2)
        // <=
        expect(3).toBeLessThanOrEqual(3)
        expect(3).toBeLessThanOrEqual(4)
    })
    it('正则匹配', () => {
        // 匹配字符串是否能够满足正则的验证
        expect('This is a regexp validation').toMatch(/regexp/)
        const obj = {prop1: "test", prop2: "regexp validation"}
        const childObj = {prop1: "test"}
        // 验证对象能否包含 value 的全部属性，即 value 是否是匹配对象的子集
        expect(obj).toMatchObject(childObj)
    })
    it('表单验证', () => {
        // 判定某个值是否存在在数组中
        expect([1, 2, 3]).toContain(3)
        // 匹配接收到的数组，与 toEqual 结合使用可以用于判定某个数组是否是另一个数组的子集
        expect([1, 2, 3, 4, 5]).toEqual(expect.arrayContaining([1, 2, 3]))
        expect([{a: 1, b: 2}]).toContain({a: 1, b: 2})
        // 数组长度
        expect([1, 2, 3, 4, 5, 6]).toHaveLength(6)
        // 断言对象中是否包含某个属性，针对多层级的对象可以通过 xx.yy 的方式进行传参断言
        const testObj = {
            prop1: 1,
            prop2: {
                child1: 2,
                child2: "test"
            }
        }
        expect(testObj).toHaveProperty("prop1")
        expect(testObj).toHaveProperty("prop2.child1")
    })
    it('异常抛出', () => {
        const throwError = () => {
            throw new Error('console err: this is a test error!')
        }
        // 直接执行会抛出未捕获的错误，中断后续的测试进程
        expect(throwError).toThrow()
        // throwError方法只需要传入即可，不需要执行
        expect(throwError).toThrowError()
        const catchError = () => {
            try {
                throw new Error('console err: this is a test error!');
            } catch (err) {
                console.log(err)
            }
        }
        expect(catchError).not.toThrow()
        expect(catchError).not.toThrowError()
    })
    it('同步自定义匹配器', () => {
        const toBeBetweenZeroAndTen = (num: number) => {
            if (num >= 0 && num <= 10) {
                return {
                    message: () => "num is between zero and ten",
                    pass: true,
                }
            } else {
                return {
                    message: () => 'expected num to be a number between zero and ten',
                    pass: false
                }
            }
        }
        expect.extend({toBeBetweenZeroAndTen})
        expect(8).toBeBetweenZeroAndTen()
        expect(11).not.toBeBetweenZeroAndTen()
    })
    it('异步自定义匹配器', async () => {
        debugger
        const toBeBetweenZeroAndTen = async (num: number) => {
            const res = await new Promise<{ message: () => string; pass: boolean }>((resolve) => {
                setTimeout(() => {
                    if (num >= 0 && num <= 10) {
                        resolve({
                            message: () => "",
                            pass: true
                        })
                    } else {
                        resolve({
                            message: () => 'expected num to be a number between zero and ten',
                            pass: false
                        })
                    }
                }, 1000)
            })

            return (res || {
                message: () => 'expected num to be a number between zero and ten',
                pass: false
            })
        }

        expect.extend({toBeBetweenZeroAndTen})
        await expect(8).toBeBetweenZeroAndTen()
        await expect(11).not.toBeBetweenZeroAndTen()
    })
})
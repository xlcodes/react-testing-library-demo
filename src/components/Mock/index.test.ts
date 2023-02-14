import axios from "axios";
// import React from "react";
// import { mocked } from "jest-mock";
import mock from "./index"

jest.mock("axios")

describe('examples for mock', () => {
    it('a test for global mock', async () => {
        const res = 'this is a test for global mock'
        // axios.get.mockResolvedValues(res)
        // mocked(axios.get).mockResolvedValue(res)
        // 可以创建一个和jest.fn类似的 mock 函数
        // 不同的是它可以追踪目标函数的调用，使得它的入参和回参与需要 mock 的函数是自动匹配的
        // 对于全局 mock 中的那个类型问题，就可以使用jest.spyon来解决。
        jest.spyOn(axios, 'get').mockResolvedValue(res)
        const data = await axios.get('/')
        expect(data).toBe(res)
    })
    it('a test for single mock', () => {
        jest.doMock("./index", () => ({
            __esModule: true, // 因为定义的 mock 模块是通过 esModule 导出的，所以需要加上这个属性帮助 jest 进行 mock。
            getMockData: () => {
                return "newMockData"
            }
        }))
        // doMock 只会对我们这个 test 生效，而不会提升到 import 之前去覆写原有模块
        // 需要采用在用例内 require 的方式导入
        // 直接 import 的模块还会是原来的文件，并不会生效 mock
        const mock = require('./index')
        expect(mock.getMockData()).toBe("newMockData")
    })
    it('other ways for single mock', () => {
        jest.spyOn(mock, 'getMockData').mockReturnValue(`newMockData`)
        expect(mock.getMockData()).toBe('newMockData')
    })
})
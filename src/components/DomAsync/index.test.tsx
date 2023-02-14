import React from "react";
import {render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react"
import DomAsync from "./index";

describe("examples for async",  () => {
    it('for react testing library',  async () => {
        render(<DomAsync/>)
        // 判断加载中的逻辑
        waitForElementToBeRemoved(screen.queryByText('加载中...')).then(() => {
            console.log('元素加载完成!')
        })
        const testDom = await screen.findByText('a demo for async test')
        expect(testDom).toBeInTheDocument();
        // waitfor接收两个参数
        // 第一个是需要重复执行的回调函数，我们可以在其中查询元素并且断言，waitfor 会根据设定（或者默认）的超时时间和执行间隔来重复执行回调。
        // 第二个参数是可以配置的数据，比如说超时时间（timeout)、执行间隔（interval），通过这个参数我们就可以自定义我们需要的超时场景。
        // 在官网的推荐中，建议我们在 waitfor 中只加入一个断言
        // 也就是只有一个 expect，这样是为了如果 waitfor 失败，可以更快获得某个断言的报错信息，而不用等待超时结束才看到所有的断言报错。
        await waitFor(() => {
            const waitTestDom = screen.getByText('a demo for async test')
            expect(waitTestDom).toBeInTheDocument()
        },{
            timeout: 1000,
            interval: 100
        })
    })
})
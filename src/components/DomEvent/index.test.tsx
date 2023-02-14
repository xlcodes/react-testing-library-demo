import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import DomEvent from "./index";
import userEvent from "@testing-library/user-event";

describe("绑定事件模拟触发", () => {
    it('mock events with fireEvent', () => {
        const clickEvent = jest.fn()
        render(<DomEvent onClick={clickEvent} />)
        fireEvent.click(screen.getByRole('note'))
        // 判断 mock 事件是否被调用
        expect(clickEvent).toBeCalled()
        // 判断 mock 事件调用次数
        expect(clickEvent).toBeCalledTimes(1)
    })
    it('mock events with useEvent', async () => {
        const clickEvent = jest.fn();
        render(<DomEvent onClick={clickEvent} />);
       await userEvent.click(screen.getByRole("note"));
        expect(clickEvent).toBeCalled();
        expect(clickEvent).toBeCalledTimes(1);
    })
})
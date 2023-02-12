import React from "react";
import {screen, render} from "@testing-library/react"
import DomQuery from "./index";

beforeEach(() => {
    render(<DomQuery/>)
})

describe('tests for DomQuery', () => {
    it('get & query & find', () => {
        // const element = screen.getByText(/test/i)
        const getElement = screen.getByText('test1')
        const getAllElement = screen.getAllByText(/test/i)
        const queryElement = screen.queryByText('test3')
        const queryAllElement = screen.queryAllByText('test3')

        console.log({
            getElement,
            getAllElement,
            queryElement,
            queryAllElement
        })

        debugger

    })
    it('default role', () => {
        const button = screen.getByRole('button')
        screen.debug(button)
    })
    it('自定义覆盖 role', () => {
        const btn = screen.getByRole('tab')
        screen.debug(btn)
    })
    it('aria 测试', () => {
        /**
         * aria-hidden： 不在 DOM 树上访问的元素；
         * aria-selected: 元素是否被选中；
         * aria-checked: 元素是否被勾选；
         * aria-current: 当前选中的元素；
         * aria-pressed: 被按压的元素；
         * aria-expanded:元素是否被展开；
         * aria-level: 区域的等级，值得一提的是，h1 - h6 会有默认的aria-level属性，值对应1-6；
         * aria-describedby: 可以通过描述来定位额外的元素。
         */
        const btn = screen.getByRole('button', {pressed: true})
        screen.debug(btn)
    })
    it("aria-describedby", () => {
        const btn = screen.getByRole('button', {
            description: "自定义aria按钮",
        })
        screen.debug(btn)
    })
    it('aria-label', () => {
        const note = screen.getByRole('generic', { name: 'test_note' })
        screen.debug(note)
    })
    it('label', () => {
        const labelText = screen.getByLabelText('testLabel')
        screen.debug(labelText)
    })
    it('placeholder', () => {
        const placeholder = screen.getByPlaceholderText('a query by placeholder')
        screen.debug(placeholder)
    })
    it('value', () => {
        const valueInput = screen.getByDisplayValue('a query by value')
        screen.debug(valueInput)
    })
    it('alt', () => {
        const altImg = screen.getByAltText('a query by alt')
        screen.debug(altImg)
    })
    it('a query by title', () => {
        const title = screen.getByTitle('a query by title')
        screen.debug(title)
    })
    it('testid', () => {
        const testId = screen.getByTestId('a not so good query')
        screen.debug(testId)
    })
})
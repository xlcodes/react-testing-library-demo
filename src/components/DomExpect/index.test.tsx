import React from "react";
import {render, screen} from "@testing-library/react"
import DomExpect from "./index";

beforeEach(()=> {
    render(<DomExpect/>)
})

describe('页面元素断言', () => {
    it('页面是否可见验证', () => {
        const emptyNote = screen.getByRole('generic', {name: 'empty_note'})
        const [hiddenNote] = screen.getAllByRole('note', {hidden: true})
        const normalNote = screen.getByRole('note')
        // 标签之间是否有可见内容， 即使是空格也会失败
        expect(emptyNote).toBeEmptyDOMElement()
        // 是否可见，从用户直接观察的角度看能否可见
        expect(hiddenNote).not.toBeVisible()
        // 是否存在在文档中，document.body 是否存在这个元素
        expect(emptyNote).toBeInTheDocument()
        expect(hiddenNote).toBeInTheDocument()
        expect(normalNote).toBeInTheDocument()
        // 用来匹配对应节点有没有指定的内容
        expect(normalNote).toHaveTextContent(/1/i)
    })
    it('表单验证', () => {
        const form = screen.getByRole('form')
        const username = screen.getByRole('textbox')
        const age = screen.getByRole('spinbutton')
        const manCheckbox = screen.getByRole('radio', { checked: true })
        const womanCheckbox = screen.getByRole('radio', { checked: false })
        // 检查元素是否通过 disable 属性判断，而不是 aria-disabled
        expect(username).toBeDisabled()
        // 是否未被禁用，等同于 .not.toBeDisabled
        expect(age).toBeEnabled()
        // 元素是否必填
        expect(age).toBeRequired()
        age.focus()
        // 元素是否聚焦
        expect(age).toHaveFocus()
        // checkbox 或者是 radio 是否被选中
        expect(manCheckbox).toBeChecked()
        expect(womanCheckbox).not.toBeChecked()
        // 验证整体表单的值是否和预期值匹配
        expect(form).toHaveFormValues({
            username: 'xiaolin',
            age: 23,
            sex: 'man',
        })
        // 与 toHaveFormValues 类似，不过不同的是 toHaveValue 验证某个单独的表单元素，而不是全部
        expect(age).toHaveValue(23)
    })
})
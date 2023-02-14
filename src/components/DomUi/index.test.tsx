/**
 * 组件库测试用例
 */
import React from "react";
import {render, screen} from "@testing-library/react"
import DomUi from "./index";
import {act} from "react-dom/test-utils";

beforeEach(() => {
    render(<DomUi/>)
})

describe('Ui组件库测试用例', () => {
    it('form validation without semi', () => {
        const form = screen.getByRole('form', {name: 'form'})
        const username = screen.getByRole('textbox', {name: 'form_username'})
        const age = screen.getByRole('spinbutton', {name: "form_age"})
        const manCheckbox = screen.getByRole('radio', {checked: true, name: "form_sex"})
        const womanCheckbox = screen.getByRole('radio', {checked: false, name: "form_sex"})
        expect(username).toBeDisabled()
        expect(age).toBeRequired()
        expect(age).toBeEnabled()
        act(() => {
            age.focus()
        })
        expect(age).toHaveFocus()
        expect(manCheckbox).toBeChecked()
        expect(womanCheckbox).not.toBeChecked()
        expect(form).toHaveFormValues({
            username: 'xiaolin',
            age: 23,
            sex: 'man'
        })
        expect(age).toHaveValue(23)
    })
    it('visible validation with semi', () => {
        // const form = screen.getByRole('form', {name: 'semi-form'})
        const username = screen.getByLabelText('username')
        const age = screen.getByLabelText('age')
        // const sex = screen.getByLabelText('sex')
        // const hobby = screen.getByLabelText('hobby')
        expect(username).toBeDisabled()
        expect(age).toBeEnabled()
        expect(age).toBeRequired()
        act(() => {
            age.focus()
        })
        expect(age).toHaveFocus()
        // expect(username).toHaveValue('zhenmin');
        // expect(hobby).toHaveValue('code');
        // expect(form).toHaveFormValues({
        //   username: 'zhenmin',
        //   age: 23,
        //   sex: 'man',
        //   hobby: 'code',
        // });
    })
})
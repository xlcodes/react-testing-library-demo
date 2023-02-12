import React from "react";
import {screen, render} from "@testing-library/react"
import DomQuery from "./index";

describe('tests for DomQuery', () => {
    test('get & query & find', () => {
        render(<DomQuery/>)
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
})
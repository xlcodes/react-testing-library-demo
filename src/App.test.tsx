import React from "react";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

// beforeEach(() => {
//     render(<App />);
// })

render(<App/>);

describe('test', () => {
    test('first unit test', () => {
        const elementText = screen.getByText('App Page!')
        expect(elementText).toBeInTheDocument()
    })
})
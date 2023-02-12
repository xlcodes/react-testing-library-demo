import React from "react";
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

describe('test', () => {
    test('first unit test', () => {
        render(<App />);
        expect(screen.getByText('App Page!')).toBeInTheDocument()
    })
})
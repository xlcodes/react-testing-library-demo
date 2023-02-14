import {render, screen} from "@testing-library/react";
import DomSnap from "./index";


describe("examples for snap", () => {
    it('a test for component snap', () => {
        const { baseElement } = render(<DomSnap />)
        expect(baseElement).toMatchSnapshot();
    })

    it('a test for part component snap', () => {
        render(<DomSnap />)
        expect(screen.getByRole('textbox', { name: "form_username" })).toMatchSnapshot();
    })

    it('a test for string snap', () => {
        expect('a test for string snap').toMatchSnapshot()
    })
})
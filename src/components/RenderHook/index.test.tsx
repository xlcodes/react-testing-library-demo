import React from "react";
import { render, screen} from "@testing-library/react";
import useCount from "./useCount";
import RenderHook from "./index";
import userEvent from "@testing-library/user-event";
import {renderHook} from "@testing-library/react-hooks";
import {act} from "react-dom/test-utils";

describe('examples for render hook', () => {
    // 基于组件测试
    it('a test for component with useCount', () => {
        render(<RenderHook />);
        const note = screen.getByRole("note");
        expect(note).toHaveTextContent("0");
        userEvent.click(screen.getByRole("button"));
        expect(note).toHaveTextContent("0");
    })
    // 基于 hook 测试
    it('a test for useCount', () => {
        const {result} = renderHook(() => useCount())
        act(() => {
            result.current.increase()
        })
        expect(result.current.num).toBe(1)
    })
})
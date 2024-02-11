import {render, screen } from "@testing-library/react";
import Home from "@/app/page";
import '@testing-library/jest-dom';

it("Should render correctly", () => {
    render(<Home/>)

    expect(screen.getByText("Entrar")).toBeInTheDocument()
})
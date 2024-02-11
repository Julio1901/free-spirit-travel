import {render, screen } from "@testing-library/react";
import Home from "@/app/page";
import '@testing-library/jest-dom';

it("Should render correctly", () => {
    render(<Home/>)
    expect(screen.getByText("Entrar")).toBeInTheDocument()
})

it("Should render dollar exchange rate description correctly", () => {
    render(<Home/>)
    expect(screen.getByText("Cotação dólar hoje: R$5,53")).toBeInTheDocument()
})
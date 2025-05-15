import { render, screen, fireEvent } from "@testing-library/react";
import Plans from "./Plans.tsx";
import '@testing-library/jest-dom';

describe("<Plans />", () => {
    test("Representa el valor de conteo inicial como 0", () => {
        render(<Plans />);
        expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
    });

    test("Incrementa el conteo cuando se hace clic en el button", () => {
        render(<Plans />);
        const button = screen.getByRole("button", { name: /descargar/i });
        
        fireEvent.click(button);
        expect(screen.getByText(/count is 1/i)).toBeInTheDocument();

        fireEvent.click(button);
        expect(screen.getByText(/count is 2/i)).toBeInTheDocument();
    });
});
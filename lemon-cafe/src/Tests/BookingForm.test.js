import { getByRole, render, screen } from "@testing-library/react";
import BookingForm from "../Pages/BookingForm";
import { Container } from "@chakra-ui/react";

describe('correct attributes input guests', () => {
    test('correct attributes guests', () => {
        render(<BookingForm />);
        const guestsInput = screen.getByRole('textbox', { name: /guests/i });
        expect(guestsInput).toHaveAttribute('type', 'text');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    })
})

describe('correct attributes input date', () => {
    test('correct attributes date', () => {
        render(<BookingForm />);
        const dateInput = screen.getByRole('textbox', { name: /date/i });
        expect(dateInput).toHaveAttribute('type', 'date');
    })
})

describe('correct attributes input date', () => {
    test('correct attributes date', () => {
        render(<BookingForm />);
        const dateInput = screen.getByRole('textbox', { name: /date/i });
        expect(dateInput).toHaveAttribute('type', 'date');
    })
})

// expect(screen.getByRole('input', { ninputGuestsame: 'the-inputs-id' })).toHaveValue('test');

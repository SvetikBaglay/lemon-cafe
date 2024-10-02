import { getByRole, render, screen } from "@testing-library/react";
import BookingForm from "../Pages/BookingForm";
import { Container } from "@chakra-ui/react";

// describe('correct attributes input date', () => {
//     test('correct attributes name date', () => {
//         render(<BookingForm />);
//         const guestsInput = screen.getByRole('textbox', { name: /date/i });
//         expect(guestsInput).toHaveAttribute('type', 'date');
//     })
// })


describe('correct attributes input guests', () => {
    test('correct attributes type, min, max guests', () => {
        render(<BookingForm />);
        const guestsInput = screen.getByRole('textbox', { name: /guests/i });
        expect(guestsInput).toHaveAttribute('type', 'text');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    })
})

describe('correct attributes select option ', () => {
    test('correct attributes name time', () => {
        render(<BookingForm />);
        const dateInput = screen.getByRole('combobox', { name: /time/i });
        expect(dateInput).toHaveAttribute( 'name', 'time');
    })
})

describe('correct attributes select option occasion', () => {
    test('correct attributes name occasion', () => {
        render(<BookingForm />);
        const dateInput = screen.getByRole('combobox', { name: /occasion/i });
        expect(dateInput).toHaveAttribute( 'name', 'occasion');
    })
})



// expect(screen.getByRole('input', { ninputGuestsame: 'the-inputs-id' })).toHaveValue('test');

//  Here are the accessible roles:

//       combobox:

//       Name "Choose time":
//       <select
//         id="time"
//         name="time"
//       />

//       Name "Occasion":
//       <select
//         id="occasion"
//         name="occasion"
//       />

//       --------------------------------------------------
//       textbox:

//       Name "Number of guests":
//       <input
//         id="guests"
//         max="10"
//         min="1"
//         name="guests"
//         type="text"
//         value="1"
//       />

//       --------------------------------------------------
//       option:

//       Name "Birthday":
//       <option
//         id="1"
//         value="Birthday"
//       />

//       Name "Anniversary":
//       <option
//         id="2"
//         value="Anniversary"
//       />

//       --------------------------------------------------
//       button:

//       Name "Make Your reservation":
//       <button
//         class="button button-secondary"
//         type="submit"
//       />


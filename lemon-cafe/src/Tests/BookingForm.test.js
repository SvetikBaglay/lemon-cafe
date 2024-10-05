import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from "../Pages/BookingForm";
import { act } from 'react';


describe('correct attributes input date', () => {
  test('correct attributes are applied', () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/date/i); // Шукаємо по імені label або атрибуту name

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
  });
});


describe('correct attributes select option ', () => {
    test('correct attributes name time', () => {
        render(<BookingForm />);
        const timeInput = screen.getByRole('combobox', { name: /time/i });
        expect(timeInput).toHaveAttribute( 'name', 'time');
    })
})

describe('correct attributes select option occasion', () => {
    test('correct attributes name occasion', () => {
        render(<BookingForm />);
        const occasionInput = screen.getByRole('combobox', { name: /occasion/i });
        expect(occasionInput).toHaveAttribute( 'name', 'occasion');
    })
})

describe('correct attributes input guests', () => {
    test('correct attributes input guests aria-labelledby from label id', () => {
        render(<BookingForm />);
        const guests = screen.getByLabelText('Number of guests');
        expect(guests).toHaveAttribute('aria-labelledby', 'guests');
        expect(screen.getByLabelText('Number of guests')).toBeTruthy();
    })
})


describe('correct value input guests', () => {
    test('correct valid value input guests ', () => {
        render(<BookingForm />);
        const guestsInput = screen.getByLabelText(/guests/i);
        expect(guestsInput).toHaveValue(1)
    })
})

describe('correct value input guests', () => {
    test('correct valid value input guests ', async () => {
        await act(async () => {
            render(<BookingForm />);
        })
        const guestsInput = screen.getByLabelText(/guests/i);
        await act(async () => {
            fireEvent.input(guestsInput, { target: { value: 111 } });
             });
        // expect(guestsInput).toBeValid('a') // no valid)
        expect(guestsInput).toBeInvalid('a')
    })
})



describe('correct attributes button Submit', () => {
    test('correct attributes type submit button', () => {
        render(<BookingForm />);
        const form = document.querySelector('form')
        const submitButton = form.querySelector('.button');
        expect(submitButton).toHaveAttribute( 'type', 'submit');
    })
})


describe('correct attributes button Reservation', () => {
   test('it renders the Reservation button', () => {
    const { getByTestId } = render(<BookingForm />);
    const loginButton = getByTestId('reservation-button');
    expect(loginButton.textContent).toBe('Make Your reservation');
    });
})



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


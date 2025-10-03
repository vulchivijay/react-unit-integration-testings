// src/components/NameForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  test('submitting the form shows the submitted name', () => {
    render(<Form />);

    // Find the input and submit button
    const nameInput = screen.getByLabelText(/enter your name:/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Simulate typing into the input
    fireEvent.change(nameInput, { target: { value: 'Alice' } });

    // Assert the input's value has changed
    expect(nameInput.value).toBe('Alice');

    // Simulate clicking the submit button
    fireEvent.click(submitButton);

    // Check for the newly rendered greeting
    expect(screen.getByText(/Hello, Alice!/i)).toBeInTheDocument();
  });
});
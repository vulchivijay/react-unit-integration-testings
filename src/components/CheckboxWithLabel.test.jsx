import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import CheckboxWithLabel from './CheckboxWithLabel.jsx';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Checkbox component', () => {
  test('CheckboxWithLabel changes the text after click', () => {
    const { queryByLabelText, getByLabelText } = render(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />,
    );
    expect(queryByLabelText(/off/i)).toBeTruthy();
    fireEvent.click(getByLabelText(/off/i));
    expect(queryByLabelText(/on/i)).toBeTruthy();
  });
  test('CheckboxWithLabel changes the text after click', () => {
    const { queryByLabelText, getByLabelText } = render(
      <CheckboxWithLabel labelOn="Off" labelOff="On" />,
    );
    expect(queryByLabelText(/on/i)).toBeTruthy();
    fireEvent.click(getByLabelText(/on/i));
    expect(queryByLabelText(/off/i)).toBeTruthy();
  });
});
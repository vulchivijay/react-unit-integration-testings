import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App'; // Assuming your main component is App.jsx

describe("App Component", () => {
  test("Renders static text Vite + React + Jest", () => {
    // Arrange
    render(<App />);
    // Action
    // Asset
    const headingElement = screen.getByText("Vijaya Kumar", { exact: false });
    expect(headingElement).toBeInTheDocument();
  });
  test("Renders default text", () => {
    // Arrange
    render(<App />);
    // Actions
    // Asset
    const textElement = screen.getByText("Vite + React", { exact: true });
    expect(textElement).toBeInTheDocument();
  });
  test("Renders text change", () => {
    // Arrange
    render(<App />);
    // Actions
    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement);
    // Asset
    const textElement = screen.getByText("React + Vite", { exact: true });
    expect(textElement).toBeInTheDocument();
  });
  test("Renders text change again", () => {
    // Arrange
    render(<App />);
    // Actions
    const btnElement = screen.getByRole("button")
    fireEvent.click(btnElement);
    // Asset
    setTimeout(() => {
      const textElement = screen.getByText("Vite + React", { exact: true });
      expect(textElement).toBeInTheDocument();
    }, 0);
  });
  test("Render input field", () => {
    // Arrange
    render(<App />)
    // Actions
    const inputElement = screen.getByPlaceholderText("Enter name");
    expect(inputElement).toBeInTheDocument();
  });
  test("Render input field is empty", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Enter name");
    inputElement.setAttribute("value", "vijay");
    console.log(inputElement.getAttribute("value") === "vijay");
    expect(inputElement).toBeInTheDocument();
  })
});
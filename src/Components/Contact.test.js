import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact form", () => {
  test("renders form with name, email, message, and submit button", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const messageInput = screen.getByPlaceholderText("Message");
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("displays error message when name is not entered", () => {
    render(<Contact />);
    const emailInput = screen.getByPlaceholderText("Email");
    const messageInput = screen.getByPlaceholderText("Message");
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });
    fireEvent.click(submitButton);
    const errorMessage = screen.getByText(/name is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message when name is not valid", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const messageInput = screen.getByPlaceholderText("Message");
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.change(nameInput, { target: { value: "te" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });
    fireEvent.click(submitButton);
    const errorMessage = screen.getByText(/name can only have/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message when email is not entered", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    const messageInput = screen.getByPlaceholderText("Message");
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.change(nameInput, { target: { value: "Test_User" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });
    fireEvent.click(submitButton);
    const errorMessage = screen.getByText(/email is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

});

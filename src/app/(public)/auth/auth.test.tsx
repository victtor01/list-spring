import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi, Mock } from "vitest";
import { useAuthentication } from "@/hooks/use-auth";
import Auth from "./page";

vi.mock("@/hooks/use-auth", () => ({
  useAuth: vi.fn(),
}));

vi.mock("next/font/google", () => ({
  Roboto: () => ({ className: "mocked-font" }), // Retorna um objeto falso
}));

describe("Auth Component", () => {
  beforeEach(() => {
    (useAuthentication as Mock).mockReturnValue({
      auth: vi.fn(),
    });
  });

  test("deve renderizar os elementos corretamente", () => {
    render(<Auth />);

    expect(screen.getByText("Faça o login")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
    expect(screen.getByText(/esqueci minha senha/i)).toBeInTheDocument();
  });

  test("deve chamar a função auth ao clicar no botão de login", () => {
    const mockAuth = vi.fn();
    (useAuthentication as Mock).mockReturnValue({ auth: mockAuth });

    render(<Auth />);

    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

    expect(mockAuth).toHaveBeenCalledTimes(1);
    expect(mockAuth).toHaveBeenCalledWith("example@gmail.com", "example");
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi, Mock, it } from "vitest";
import { useAuthentication } from "@/hooks/use-auth";
import Auth from "./page";

vi.mock("@/hooks/use-auth", () => ({
  useAuthentication: vi.fn(() => ({
    useAuth: () => ({
      form: {
        register: vi.fn(),
        handleSubmit: (fn: any) => () => fn(), // Garante que a função de submit seja chamada corretamente
        formState: { errors: {} },
      },
      submit: vi.fn(),
    }),
  })),
}));


vi.mock("next/font/google", () => ({
  Roboto: () => ({ className: "mocked-font" }), // Retorna um objeto falso
}));

describe("Auth Component", () => {
  const mockSubmit = vi.fn();

  beforeEach(() => {
    (useAuthentication as Mock).mockReturnValue({
      useAuth: vi.fn().mockReturnValue({
        form: {
          register: vi.fn(),
          handleSubmit: (fn: any) => () => fn(), // Simula corretamente o submit
          formState: { errors: {} },
        },
        submit: mockSubmit, // Passamos o mock para a função submit
      }),
    });
  });

  it("deve renderizar os elementos corretamente", () => {
    render(<Auth />);

    expect(screen.getByText("Faça o login")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
    expect(screen.getByText(/esqueci minha senha/i)).toBeInTheDocument();
  });

   it("deve chamar a função auth ao clicar no botão de login", () => {
    render(<Auth />);

    fireEvent.submit(screen.getByRole("button", { name: /Entrar/i }));

    expect(mockSubmit).toHaveBeenCalledTimes(1); // Agora a função será chamada corretamente
  });
});

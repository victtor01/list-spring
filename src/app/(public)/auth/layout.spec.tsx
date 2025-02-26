import { render, screen } from "@testing-library/react";
import LayoutAuth from "./layout";
import { describe, expect, it } from "vitest";

describe("#LayoutAuth", () => {
  it("deve renderizar os botões corretamente", () => {
    render(<LayoutAuth>Conteúdo de teste</LayoutAuth>);

    expect(
      screen.getByRole("button", { name: /SiginUp/i })
    ).toBeInTheDocument();
  });

  it("deve renderizar os filhos corretamente", () => {
    render(
      <LayoutAuth>
        <div data-testid="child">Conteúdo de teste</div>
      </LayoutAuth>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});

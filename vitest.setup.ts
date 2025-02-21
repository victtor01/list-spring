import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("@/fonts", () => ({
	fontSaira: { className: "mocked-font" },
	roboto: { className: "mocked-font" },
	openSans: { className: "mocked-font" },
}));

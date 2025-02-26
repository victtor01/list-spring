import { clearCookies } from "@/actions/clear-cookies";
import { fontSaira } from "@/fonts";
import { CookiesKeys } from "@/utils/cookies-keys";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const isTokenExpired = (token: string | null) => {
  if (!token) return true;

  try {
    const decoded: { exp: number } = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};

export default async function Layout({ children }: LayoutProps) {
  const allCookies = await cookies();
  const refresh = allCookies.get(CookiesKeys.refreshToken)?.value || null;

  const handleLoginAgain = async () => {
    "use server";
    await clearCookies();
    redirect("/login");
  };

  if (isTokenExpired(refresh)) {
    return (
      <main className="flex w-full h-screen overflow-auto flex-col bg-gray-900">
        <div className="flex gap-4 flex-col bg-gray-900 w-full max-w-[22rem] rounded-2xl p-5 m-auto shadow-xl shadow-black">
          <header className="text-gray-500 dark:text-gray-100 text-center">
            <h1 className={`${fontSaira} text-xl font-semibold`}>
              Sessão expirada
            </h1>
            <p className={`text-lg`}>
              Por favor, realize o login novamente para continuar usando nossos
              serviços
            </p>
          </header>

          <button
            onClick={handleLoginAgain}
            className="p-2 bg-indigo-500 shadow rounded-md font-semibold text-black mt-4 opacity-95 hover:opacity-100"
          >
            Entrar novamente
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex w-full h-screen overflow-auto flex-col bg-white dark:bg-gray-950/30">
      {children}
    </main>
  );
}

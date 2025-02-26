// app/actions/clearCookies.ts
"use server";

import { CookiesKeys } from "@/utils/cookies-keys";
import { cookies } from "next/headers";

export async function clearCookies() {
  try {
    const allCoookies = await cookies();
    allCoookies.delete(CookiesKeys.accessToken);
    allCoookies.delete(CookiesKeys.refreshToken);

    return { success: true, message: "Cookies removidos com sucesso." };
  } catch (error) {
    return { success: false, message: "Erro ao remover cookies." };
  }
}

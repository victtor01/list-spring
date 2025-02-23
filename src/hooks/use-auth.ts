import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

interface ResponseAuth {
  error: boolean;
  message: string;
}

const schemaLogin = z.object({
  email: z.string().email("Formato de email inválido!"),
  password: z
    .string({ message: "A senha é requerida" })
    .min(1, "Senha curta demais!"),
});

type SchemaProps = z.infer<typeof schemaLogin>;

function useAuthentication() {
  const router = useRouter();

  const useAuth = () => {
    const form = useForm<SchemaProps>({
      resolver: zodResolver(schemaLogin),
    });

    const submit = async ({ email, password }: SchemaProps) => {
      try {
        const response = await api.post<ResponseAuth>("/auth", {
          email,
          password,
        });

        console.log(response);

        // router.replace("/home");
      } catch (error) {
        toast.error("Houve um erro");
      }
    };

    return {
      submit,
      form,
    };
  };

  return {
    useAuth,
  };
}

export { useAuthentication };

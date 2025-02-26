import { IWorkspace } from "@/interfaces/IWorkspace";
import { api } from "@/utils/api";
import { CreateWorkspace } from "@/validations/create-workspace-validation";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useWorkspace = () => {
  const getAll = () => {
    const { data: workspaces, isLoading } = useQuery<IWorkspace[]>({
      queryKey: ["workspaces"],
      queryFn: async () => (await api.get("workspaces")).data,
    });

    return {
      workspaces,
      isLoading,
    };
  };

  const create = async (props: CreateWorkspace) => {
    try {
      const response = await api.post("workspaces", props);
      console.log(response);
    } catch (error) {
      toast.error("Houve um erro ao tentar criar um espaço");
    }
  };

  return {
    getAll,
    create,
  };
};

export { useWorkspace };

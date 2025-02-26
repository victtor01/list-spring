import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().min(1),
});

export type CreateWorkspace = z.infer<typeof createWorkspaceSchema>;

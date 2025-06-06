import { z } from "zod";

export const GetAdvocatesSchema = z.object({
    searchTerm: z.string().optional(),
    page: z.number().min(1).default(1),
    pageSize: z.number().min(1).max(100).default(10),
});

export type GetAdvocatesInput = z.infer<typeof GetAdvocatesSchema>;

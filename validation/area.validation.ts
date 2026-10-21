import z from "zod";

export const areaSchema = z.object({
    name: z
        .string("Not A String!!!!!")
        .min(3, "Name must atleast 3 characters long!!!"),
        
    district: z
        .string("Not A String!!!!!")
        .min(3, "Name must atleast 3 characters long!!!")
        ,
    division: z
        .string("Not A String!!!!!")
        .min(3, "Name must atleast 3 characters long!!!")
        ,
    description: z
        .string("Not A String!!!!!")
        .min(3, "Name must atleast 3 characters long!!!")
        ,
});
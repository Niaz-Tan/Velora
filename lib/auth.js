import client from "@/lib/mongodb";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
});

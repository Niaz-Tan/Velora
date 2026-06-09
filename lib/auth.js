import client from "@/lib/mongodb";
import { User } from "@/model/user-model";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  hooks: {
    user: {
      create: async ({ user }) => {
        try {
          await User.updateOne(
            { _id: user.id },
            {
              $setOnInsert: {
                _id: user.id,
                name: user.name,
                email: user.email,
                image: `https://api.dicebear.com/9.x/identicon/svg?seed=${user.name}`,
                phone: "",
                role: "customer",
              },
            },
            { upsert: true },
          );
        } catch (err) {
          console.error("User sync error:", err);
        }
      },
    },
  },
});

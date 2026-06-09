"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSignUp() {
    const res = await authClient.signUp.email({
      name,
      email,
      password,
    });

    const user = res?.data?.user;

    if (user) {
      await fetch("/api/profile/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
          phone,
        }),
      });

      router.push("/test");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFDF8] px-4">
      <div className="w-full max-w-md rounded-3xl border border-[#E8DFD1] bg-white p-8 shadow-sm">
        {/* TITLE */}
        <h1 className="text-center text-3xl font-bold text-[#2B2B2B]">
          Create Account
        </h1>

        <p className="mt-2 text-center text-sm text-[#6F6A63]">
          Join Velora and start shopping handmade magic ✨
        </p>

        {/* FORM */}
        <div className="mt-6 space-y-4">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-[#E8DFD1] px-4 py-3 text-sm outline-none focus:border-[#7A6A53]"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-[#E8DFD1] px-4 py-3 text-sm outline-none focus:border-[#7A6A53]"
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-[#E8DFD1] px-4 py-3 text-sm outline-none focus:border-[#7A6A53]"
          />

          <input
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-[#E8DFD1] px-4 py-3 text-sm outline-none focus:border-[#7A6A53]"
          />

          {/* BUTTON */}
          <button
            onClick={handleSignUp}
            className="w-full rounded-xl bg-[#2B2B2B] py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            Create Account
          </button>
        </div>

        {/* FOOTER */}
        <p className="mt-6 text-center text-xs text-[#6F6A63]">
          Already have an account?{" "}
          <span className="cursor-pointer text-[#7A6A53] underline">Login</span>
        </p>
      </div>
    </div>
  );
}

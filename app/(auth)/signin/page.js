"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    const res = await authClient.signIn.email({
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
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-sm text-[#6F6A63]">
          Sign in to continue your shopping journey ✨
        </p>

        {/* FORM */}
        <div className="mt-6 space-y-4">
          <input
            placeholder="Email address"
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

          {/* BUTTON */}
          <button
            onClick={handleSignIn}
            className="w-full rounded-xl bg-[#2B2B2B] py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            Sign In
          </button>
        </div>

        {/* FOOTER */}
        <p className="mt-6 text-center text-xs text-[#6F6A63]">
          Don’t have an account?{" "}
          <span className="cursor-pointer text-[#7A6A53] underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function TestPage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function load() {
      const session = await authClient.getSession();
      const user = session?.data?.user;

      if (!user) return;

      const res = await fetch(`/api/profile/${user.id}`);
      const data = await res.json();

      setProfile(data);
    }

    load();
  }, []);

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFFDF8]">
        <div className="text-sm text-[#6F6A63]">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFDF8] px-4">
      <div className="relative w-full max-w-md rounded-3xl border border-[#E8DFD1] bg-white p-8 shadow-sm">
        {/* UID BADGE */}
        <div className="absolute right-4 top-4 rounded-full bg-[#F5EFE4] px-3 py-1 text-xs text-[#6F6A63]">
          UID: {profile._id}
        </div>

        {/* TITLE */}
        <h1 className="text-center text-3xl font-bold text-[#2B2B2B]">
          Profile
        </h1>

        {/* AVATAR */}
        <div className="mt-6 flex justify-center">
          <img
            src={`https://api.dicebear.com/9.x/identicon/svg?seed=${profile.name}`}
            width={120}
            height={120}
            alt="profile"
            className="rounded-full border border-[#E8DFD1] bg-[#FFFDF8] p-2"
          />
        </div>

        {/* INFO */}
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between border-b border-[#F0E6D8] pb-2">
            <span className="text-[#6F6A63]">Name</span>
            <span className="font-medium text-[#2B2B2B]">{profile.name}</span>
          </div>

          <div className="flex justify-between border-b border-[#F0E6D8] pb-2">
            <span className="text-[#6F6A63]">Email</span>
            <span className="font-medium text-[#2B2B2B]">{profile.email}</span>
          </div>

          <div className="flex justify-between border-b border-[#F0E6D8] pb-2">
            <span className="text-[#6F6A63]">Phone</span>
            <span className="font-medium text-[#2B2B2B]">
              {profile.phone || "Not set"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#6F6A63]">Role</span>
            <span className="font-medium text-[#7A6A53]">{profile.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { authClient } from "@/lib/auth-client";
import {
  KeyRound,
  LogOut,
  Mail,
  Phone,
  Settings,
  Shield,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfilePage() {
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

  async function handleLogout() {
    await authClient.signOut();
    window.location.href = "/";
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFFDF8]">
        <div className="text-sm text-[#6F6A63]">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF8] px-4 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {/* LEFT SIDEBAR */}
        <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6">
          {/* AVATAR */}
          <div className="flex flex-col items-center text-center">
            <img
              src={`https://api.dicebear.com/9.x/identicon/svg?seed=${profile.name}`}
              className="h-24 w-24 rounded-full border border-[#E8DFD1]"
              alt="avatar"
            />

            <h2 className="mt-4 text-lg font-semibold text-[#2B2B2B]">
              {profile.name}
            </h2>

            <p className="text-xs text-[#6F6A63]">{profile.email}</p>
          </div>

          {/* ACTIONS */}
          <div className="mt-6 space-y-2">
            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm hover:bg-[#F5EFE4]">
              <User size={18} /> Overview
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm hover:bg-[#F5EFE4]">
              <Settings size={18} /> Settings
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm hover:bg-[#F5EFE4]">
              <Shield size={18} /> Security
            </button>

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-500 hover:bg-red-50"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="md:col-span-2 space-y-6">
          {/* HEADER CARD */}
          <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6">
            <h1 className="text-2xl font-bold text-[#2B2B2B]">
              Account Overview
            </h1>
            <p className="mt-1 text-sm text-[#6F6A63]">
              Manage your personal information and account settings
            </p>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E8DFD1] bg-white p-5">
              <div className="flex items-center gap-2 text-sm text-[#6F6A63]">
                <User size={16} /> Name
              </div>
              <p className="mt-2 font-medium text-[#2B2B2B]">{profile.name}</p>
            </div>

            <div className="rounded-2xl border border-[#E8DFD1] bg-white p-5">
              <div className="flex items-center gap-2 text-sm text-[#6F6A63]">
                <Mail size={16} /> Email
              </div>
              <p className="mt-2 font-medium text-[#2B2B2B]">{profile.email}</p>
            </div>

            <div className="rounded-2xl border border-[#E8DFD1] bg-white p-5">
              <div className="flex items-center gap-2 text-sm text-[#6F6A63]">
                <Phone size={16} /> Phone
              </div>
              <p className="mt-2 font-medium text-[#2B2B2B]">
                {profile.phone || "Not added"}
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8DFD1] bg-white p-5">
              <div className="flex items-center gap-2 text-sm text-[#6F6A63]">
                <KeyRound size={16} /> Role
              </div>
              <p className="mt-2 font-medium text-[#7A6A53]">{profile.role}</p>
            </div>
          </div>

          {/* UID BLOCK */}
          <div className="rounded-3xl border border-dashed border-[#CBB89D] bg-white p-5 text-sm text-[#6F6A63]">
            UID: <span className="text-[#2B2B2B]">{profile._id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

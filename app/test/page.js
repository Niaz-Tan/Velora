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

  if (!profile) return <div>Loading...</div>;

  return (
    <div style={{ padding: 30 }}>
      <div style={{ position: "absolute", top: 10, right: 10 }}>
        UID: {profile._id}
      </div>

      <h1>Profile</h1>

      <img
        src={`https://api.dicebear.com/9.x/identicon/svg?seed=${profile.name}`}
        width={120}
        height={120}
        style={{ borderRadius: "50%" }}
        alt="profile"
      />

      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>Role: {profile.role}</p>
    </div>
  );
}

import { User } from "@/model/user-model";

export async function POST(req) {
  const body = await req.json();

  const { id, name, email, image } = body;

  if (!id) {
    return Response.json({ error: "Missing user id" }, { status: 400 });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      _id: id,
      name,
      email,
      image: image || `https://api.dicebear.com/9.x/identicon/svg?seed=${name}`,
      role: "customer",
    },
    { upsert: true, new: true },
  );

  return Response.json(user);
}

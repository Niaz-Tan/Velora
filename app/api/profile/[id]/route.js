import { User } from "@/model/user-model";

export async function GET(req, { params }) {
  const { id } = await params;

  const user = await User.findById(id);

  return Response.json(user);
}

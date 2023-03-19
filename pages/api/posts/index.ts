import type { NextApiRequest, NextApiResponse } from "next";

export default function handlere(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ post: "Default page" });
}

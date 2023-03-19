import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    title: string
    message: string
}

export default function userHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ title: "Ok", message: "hello world" });
}

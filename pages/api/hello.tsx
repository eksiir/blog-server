import { NextApiRequest, NextApiResponse } from 'next'

// Lambda at http://localhost:3000/api/hello
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello Lambda!' });
}

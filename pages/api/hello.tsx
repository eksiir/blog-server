import { NextApiRequest, NextApiResponse } from 'next';

// Lambda at http://localhost:3000/api/hello
export default (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ text: 'Hello Lambda!' });
};

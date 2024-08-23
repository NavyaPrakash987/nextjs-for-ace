// api/fetchUser.ts

import prisma from '../../../prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      const users = await prisma.User.findMany()
      res.status(200).json({ users: users });
}
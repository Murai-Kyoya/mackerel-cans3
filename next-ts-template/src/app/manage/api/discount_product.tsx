import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const discount_product = await prisma.discount.findMany({
      where: {
        sid: process.env.ID!,
      },
      include: {
        product: true,
      },
    });
    res.status(200).json(discount_product);
    console.log(discount_product)
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}  
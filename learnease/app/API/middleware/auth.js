import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function withAuth(handler) {
  return async (req, res) => {
    const session = req.cookies.session;
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await prisma.user.findUnique({
      where: { id: session },
    });

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = user;
    return handler(req, res);
  };
}

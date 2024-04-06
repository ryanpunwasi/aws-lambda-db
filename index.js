import { prisma } from "./prisma/prismaInstance.js";

const getUserByEmail = async email => {
  return await prisma.user.findUnique({ where: { email } });
};

export const handler = async event => {
  return await getUserByEmail(event.email);
};

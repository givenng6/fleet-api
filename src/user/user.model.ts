import { Prisma, Role } from '@prisma/client'

export class User  implements Prisma.UserCreateInput {
    id: number;
    email: string;
    name: string;
    role: Role;
}
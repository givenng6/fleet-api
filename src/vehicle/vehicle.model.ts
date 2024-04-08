import { Prisma, User } from '@prisma/client'

export class Vehicle  implements Prisma.VehicleCreateInput {
    id: number;
    make: string;
    model: string;
    registration: string;
    mileage: number;
    driverId: number;
    driver: Prisma.UserCreateNestedOneWithoutVehicleInput;
}
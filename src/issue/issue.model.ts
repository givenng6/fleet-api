import { Prisma } from "@prisma/client";

export class Issue implements Prisma.IssueCreateInput {
    id: number;
    title: string;
    description:  string;
    severity: number;
    closed: boolean;
    vehicleId: number;
    vehicle: Prisma.VehicleCreateNestedOneWithoutIssuesInput;
}
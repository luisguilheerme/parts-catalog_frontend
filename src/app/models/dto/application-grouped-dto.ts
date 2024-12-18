import { ApplicationDTO } from "./application-dto";

export interface ApplicationGroupedDTO {
    brand: string;
    applications: ApplicationDTO[];
}  
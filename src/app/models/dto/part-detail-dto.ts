import { ApplicationGroupedDTO } from "./application-grouped-dto";

export interface PartDetailDTO {

    id: number;
    description: string;
    imgUrl: string;
    manufacturer: string;
    subGroup: string;
    applications: ApplicationGroupedDTO[]; 
    codes: string[];
    originalCodes: string[];
    startersAlternatorsCodes: string[];

}

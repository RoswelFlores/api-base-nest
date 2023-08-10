import { IsString, MinLength } from "class-validator";


export class CreateCarDTO{

    @IsString({message: `Debe ser string`})
    readonly brand : string;

    @IsString()
    @MinLength(3)
    readonly model: string;

}
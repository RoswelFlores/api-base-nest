import { IsString, MinLength,IsUUID,IsOptional } from "class-validator";


export class UpdateCarDTO{

    
    @IsString({message: `Debe ser string`})
    @IsUUID()
    @IsOptional()
    readonly id? : string;
    
    @IsString({message: `Debe ser string`})
    @IsOptional()
    readonly brand? : string;

    @IsString()
    @IsOptional()
    readonly model? : string;

}
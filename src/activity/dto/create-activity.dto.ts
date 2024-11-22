import { IsNumber, IsString } from "class-validator";

export class CreateActivityDto {
    @IsString()
    title:string;

    @IsString()
    description:string;

    @IsString()
    start_hour:string;

    @IsString()
    end_hour:string;

    @IsNumber()
    task_id:number;

    @IsNumber()
    status:number;
}

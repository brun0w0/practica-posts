import { IsBoolean, IsNumber, IsString } from "class-validator";

enum priority {
    TOP="TOP",
    DUMP="DUMP"
}

export class CreateTaskDto {
    @IsString()
    title:string;

    @IsString()
    description:string;

    @IsBoolean()
    priority:priority;

    @IsString()
    due_date:string;

    @IsNumber()
    user_id:number;

    @IsNumber()
    status:number;
}

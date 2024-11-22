import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  name:string;

  @IsString()
  password:string;

  @IsEmail()
  email:string;

  @IsString()
  start_time:string;

  @IsString()
  end_time:string;

  @IsNumber()
  status:number;
}

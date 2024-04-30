import { IsEmail, IsString } from "class-validator";

export class CreateMessageDto {
      @IsEmail()
      email: string;

      @IsString()
      name: string;
}
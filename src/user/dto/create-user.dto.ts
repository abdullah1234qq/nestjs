import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
        message: "Validation role must be one of: INTERN, ENGINEER, ADMIN",
    })
    @IsNotEmpty()

    role: "INTERN" | "ENGINEER" | "ADMIN";
}
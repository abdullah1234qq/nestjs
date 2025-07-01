import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    findAll(@Query("role") role?: "INTERN" | "ENGINEER" | "ADMIN") {
        return this.userService.findAll(role);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id);
    }
    @Post()
    create(@Body(ValidationPipe) user: CreateUserDto) {
        return this.userService.create(user);
    }
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) userUpdate: UpdateUserDto) {
        return this.userService.update(id, userUpdate);
    }
    @Delete(":id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.userService.delete(id);
    }
}

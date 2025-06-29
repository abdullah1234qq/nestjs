import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    findAll() {
        return []
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id };
    }
    @Get('interns')
    findAllInterns() {
        return []
    }
}

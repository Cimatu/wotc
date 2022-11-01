import { Body, Controller, Post, Request } from '@nestjs/common';
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { GetRoleByTokenDto } from './dto/get-role.dto';
import { TokenService } from './token.service';

@ApiTags('Token')
@Controller('token')
export class TokenController {

    constructor(private tokenService: TokenService) { }

    @ApiOperation({ summary: 'Restore password' })
    @Post('get_role')
    restorePassword(@Body() dto: GetRoleByTokenDto) {
        return this.tokenService.getRoleByToken(dto.token)
    }
}
import { Controller, Get, Query } from '@nestjs/common';
import { VerificationTokenService } from './verification-token.service';

@Controller('token')
export class VerificationTokenController {
  constructor(private readonly verificationToken: VerificationTokenService) {}

  @Get('/send-token')
  verify(@Query('email') email: string) {
    return this.verificationToken.sendToken(email);
  }
}

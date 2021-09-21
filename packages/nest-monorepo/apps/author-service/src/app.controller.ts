import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { AppService } from './app.service';
import { authenticate } from '@carbmee/non-nestjs-sdk';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('ECO_SERVICE') private client: ClientProxy,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const pattern = { cmd: 'hello' };
    const payload = [1, 2, 3];
    const authenticationResult = await authenticate();
    return firstValueFrom(
      this.client.send<string>(pattern, [...payload, authenticationResult]),
    );
    // return this.appService.getHello();
  }
}

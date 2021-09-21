import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { GatewayServiceService } from './gateway-service.service';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        // ... Apollo server options
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'articles', url: 'http://localhost:3000/graphql' },
          { name: 'comments', url: 'http://localhost:3001/graphql' },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [GatewayServiceService],
})
export class GatewayServiceModule {}

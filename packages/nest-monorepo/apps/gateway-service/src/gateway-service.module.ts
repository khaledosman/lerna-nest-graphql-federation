import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { GatewayServiceService } from './gateway-service.service';

import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        // ... Apollo server options
        cors: true,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
      },
      gateway: {
        serviceList: [
          { name: 'articles-service', url: 'http://localhost:3000/graphql' },
          { name: 'comments-service', url: 'http://localhost:3001/graphql' },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [GatewayServiceService],
})
export class GatewayServiceModule {}

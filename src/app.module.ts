import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { BlocksModule } from './blocks/blocks.module';

@Module({
  imports: [UsersModule, MessagesModule, BlocksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { BlocksGateway } from './blocks.gateway';
import { BlocksService } from './blocks.service';

describe('BlocksGateway', () => {
  let gateway: BlocksGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlocksGateway, BlocksService],
    }).compile();

    gateway = module.get<BlocksGateway>(BlocksGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

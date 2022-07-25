import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { BlocksService } from './blocks.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';

@WebSocketGateway()
export class BlocksGateway {
  constructor(private readonly blocksService: BlocksService) {}

  @SubscribeMessage('createBlock')
  create(@MessageBody() createBlockDto: CreateBlockDto) {
    return this.blocksService.create(createBlockDto);
  }

  @SubscribeMessage('findAllBlocks')
  findAll() {
    return this.blocksService.findAll();
  }

  @SubscribeMessage('findOneBlock')
  findOne(@MessageBody() id: number) {
    return this.blocksService.findOne(id);
  }

  @SubscribeMessage('updateBlock')
  update(@MessageBody() updateBlockDto: UpdateBlockDto) {
    return this.blocksService.update(updateBlockDto.id, updateBlockDto);
  }

  @SubscribeMessage('removeBlock')
  remove(@MessageBody() id: number) {
    return this.blocksService.remove(id);
  }
}

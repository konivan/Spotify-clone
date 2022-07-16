import { TrackController } from './track.controller';
import { Module } from '@nestjs/common';
import { TrackService } from './track.service';


@Module({
  controllers: [TrackController],
  providers: [TrackService]
})
export class TrackModule {}
import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [TrackModule, MongooseModule.forRoot('mongodb+srv://konivan:konivan@cluster0.fvtap54.mongodb.net/?retryWrites=true&w=majority')],
})
export class AppModule {}
import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";


@Module({
  imports: [TrackModule, FileModule , MongooseModule.forRoot('mongodb+srv://konivan:konivan@cluster0.fvtap54.mongodb.net/?retryWrites=true&w=majority')],
})
export class AppModule {}
import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import * as path from 'path';


@Module({
  imports: [
    TrackModule,
    FileModule,
    MongooseModule.forRoot(
      'mongodb+srv://konivan:konivan@cluster0.fvtap54.mongodb.net/?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')})
  ],
})
export class AppModule {}
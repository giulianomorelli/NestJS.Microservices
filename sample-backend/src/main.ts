import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req: Request, res: Response, next) => {
    console.log("app.use in Backend:", req.url);
    next();
  });

  await app.listen(3000, "localhost", async()=>{
    console.log("backend in", await app.getUrl());
  });
}
bootstrap();

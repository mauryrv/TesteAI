import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import type { Request, Response } from "express";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.enableCors({
    origin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
    credentials: true,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Controle de gado API")
    .setDescription("API do sistema de gestão pecuária (controle de gado).")
    .setVersion("0.0.1")
    .addBearerAuth(
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
      "bearer",
    )
    .build();

  const openApiDocument = SwaggerModule.createDocument(app, swaggerConfig);
  app.use("/api/docs-json", (_req: Request, res: Response) =>
    res.json(openApiDocument),
  );
  SwaggerModule.setup("/api/docs", app, openApiDocument);

  const port = Number(process.env.PORT ?? 4000);
  await app.listen(port);
}

void bootstrap();

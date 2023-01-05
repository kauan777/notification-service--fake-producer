import { Kafka } from "kafkajs";
import { randomUUID } from "node:crypto";
import 'dotenv/config'

async function bootstrap() {
  const kafka = new Kafka({
    clientId: "kafka-producer",
    brokers: ["devoted-cicada-6826-us1-kafka.upstash.io:9092"],
    sasl: {
      mechanism: "scram-sha-256",
      username:
        "ZGV2b3RlZC1jaWNhZGEtNjgyNiTHWBEYnfmdBRlkPWT96xxWrB3tNovwU22e2n8",
      password: `${process.env.PASSWORD}`,
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();

  await producer.send({
    topic: "notifications.send-notification",
    messages: [
      {
        value: JSON.stringify({
          content: "Nova solicitação de amizade!",
          category: "social",
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();

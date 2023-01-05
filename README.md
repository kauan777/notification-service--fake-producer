<h1 align="center">Hi 👋, Bem vindo ao projeto</h1>



## Descrição

Micro-serviço fake para simular um producer.

<br/>

## Instalar as dependências

```bash
$ yarn
```
<br/>

## Crie a conta no upstash

<a href="https://upstash.com/">Clique aqui para criar<a/>

## Em producer.js, troque minhas informações pelas minhas

```js
// Exemplo

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
```
<br/>

## Adicione .env e coloque sua senha do upstash

```env
PASSWORD=SUA SENHA
```

<br/>

## Rode o projeto

```bash
node producer.js
```




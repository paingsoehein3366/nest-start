import { readFile } from "fs/promises";

export class MessagesRespository {
      async findOne(id: string) {
            const contents = await readFile('message.json', 'utf-8');
            const messages = JSON.parse(contents);

            return messages[id];
      }

      async findAll() {
            const contents = await readFile('message.json', 'utf-8');
            const messages = JSON.parse(contents);

            return messages;
      }

      async create(message: string) {

      }
}
import { PrismaClient } from '@prisma/client';
import express from 'express';
const prisma = new PrismaClient();
const app = express();
async function main() {
    const post = await prisma.post.create({
        data: {
            email: 'someemail@gmai.com',
            name: 'Some Name',
        },
    });
    console.log(post);
}
main();
app.listen(8080, () => console.log('Server is running'));
//# sourceMappingURL=index.js.map
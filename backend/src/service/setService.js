const prisma = require('../prisma/prismaClient');

async function createSet(data){
    const set = await prisma.set.create({
        data: {
            name: data.name,
            code: data.code,
            tcgId: data.tcgId
        }
    });

    return set;
}  

module.exports = {
    createSet
};
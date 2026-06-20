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

async function viewAllSet() {
    return await prisma.set.findMany();
}

module.exports = {
    createSet,
    viewAllSet
};
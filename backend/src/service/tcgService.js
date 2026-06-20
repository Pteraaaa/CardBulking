const prisma = require('../prisma/prismaClient');

async function createTCG(data){
    const tcg = await prisma.TCG.create({
        data: {
            name: data.name,
        }
    });

    return tcg;
}  

module.exports = {
    createTCG
};
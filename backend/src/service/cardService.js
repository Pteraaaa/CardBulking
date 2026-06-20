const prisma = require('../prisma/prismaClient');

async function createCard(data){
    const card = await prisma.card.create({
        data: {
            name: data.name,
            number: data.number,
            rarity: data.rarity,
            setId: data.setId
        }
    });

    return card;
}  

module.exports = {
    createCard
};
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

async function viewAllCards() {
    return await prisma.card.findMany();
}

async function viewCardsByName(name) {
    return await prisma.card.findMany({
        where: {
            name: {
                contains: name,
                mode: 'insensitive'
            }
        }
    });
}

module.exports = {
    createCard,
    viewAllCards,
    viewCardsByName
};
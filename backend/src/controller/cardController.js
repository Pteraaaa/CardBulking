const cardService = require('../service/cardService');

async function createCard(req, res) {
    try {
        const card = await cardService.createCard(req.body);

        return res.status(201).json({
            success: true,
            data: card
        });
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function viewAllCards(req, res) {
    try {
        const cards = await cardService.viewAllCards();

        res.status(200).json({
            success: true,
            cards
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function viewCardsByName(req, res) {
    try {
        const cards = await cardService.viewCardsByName();

        res.status(200).json({
            success: true,
            cards
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createCard,
    viewAllCards,
    viewCardsByName
}
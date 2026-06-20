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

module.exports = {
    createCard
}
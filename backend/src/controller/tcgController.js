const tcgService = require('../service/tcgService');

async function createTCG(req, res) {
    try {
        const tcg = await tcgService.createTCG(req.body);

        return res.status(201).json({
            success: true,
            data: tcg
        });
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function viewAllTCG(req, res) {
    try {
        const tcgs = await tcgService.viewAllTCG();

        return res.status(200).json({
            success: true,
            tcgs
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createTCG,
    viewAllTCG
};
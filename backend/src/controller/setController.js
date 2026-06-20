const setService = require('../service/setService');

async function createSet(req, res) {
    try {
        const set = await setService.createSet(req.body);

        return res.status(201).json({
            success: true,
            data: set
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

async function viewAllSet(req, res) {
    try {
        const sets = await setService.viewAllSet();

        return res.status(200).json({
            success: true,
            sets
        })
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createSet,
    viewAllSet
};
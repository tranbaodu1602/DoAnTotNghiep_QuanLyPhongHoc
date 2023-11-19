const Admin = require('../services/AdminService');

const themPhongHoc = async (req, res) => {
    try {
        const classroom = await Admin.themPhongHoc(req.body);
        res.status(200).json({
            classroom,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const taoThongBao = async (req, res) => {
    try {
        const notify = await Admin.taoThongBao(req);
        res.status(200).json({
            notify,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const xoaAllThongBao = async (req, res) => {
    try {
        const notify = await Admin.xoaAllThongBao();
        res.status(200).json({
            notify,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    themPhongHoc,
    taoThongBao,
    xoaAllThongBao,
};

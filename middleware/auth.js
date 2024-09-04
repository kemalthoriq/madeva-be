const authMiddleware = (req, res, next) => {
    const secToken = req.headers['sec-token'];
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    if (secToken !== today) return res.status(401).json({ error: 'Unauthorized' });
    next();
};

module.exports = authMiddleware;
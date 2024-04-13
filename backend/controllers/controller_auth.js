exports.dashboard = (req, res) => {
    try {
        res.status(200).render('auth');
    } catch (error) {
        console.error(error);
    }
}
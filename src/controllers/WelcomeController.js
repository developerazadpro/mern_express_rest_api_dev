exports.Welcome = (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Welcome dear friend"
    })
}
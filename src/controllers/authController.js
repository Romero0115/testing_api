const login = (req, res) => {
    const { email, password } = req.body;

    if (email != 'admin@gmail.com') {
        return res.status(401).json({
            toastText: "toastWrongUser"
        });
    };

    if (password != '123456') {
        return res.status(401).json({
            toastText: "toastWrongPassword"
        });
    };

    return res.status(200).json({
        toastText: "toastLoginSuccess"
    });
};

module.exports = { login };

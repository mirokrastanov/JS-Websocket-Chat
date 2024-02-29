export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        res.send('signupUser');
    } catch (error) {

    }
};

export const login = (req, res) => {
    console.log('loginUser');
};

export const logout = (req, res) => {
    console.log('logoutUser');
};

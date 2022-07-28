import getAuthentication from "../models/authentication.js";

const login = async (req, res, next) => {

    try {
        getAuthentication(req, res)
    } catch (error) {
        next(error)
    }
};

export default login
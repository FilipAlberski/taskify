import axios from "axios";

const apitest = async () => {
    const response = await axios.get("/api/apitest");
    // return response data
    return response.data.message;
};

export default apitest;

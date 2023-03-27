import React, { useEffect } from "react";
import { DashboardMainContainer } from "../../../components/DashboardMain/DashboardMain.styled";
import axios from "axios";
const Stats = () => {
    //axios test route

    useEffect(() => {
        axios
            .get("/api/auth/test")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.response.data.error));
    }, []);

    return (
        <DashboardMainContainer>
            <h1>stats</h1>
        </DashboardMainContainer>
    );
};

export default Stats;

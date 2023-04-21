import React from "react";
import { TasksContainer } from "./tasks.styled";
import axios from "axios";
import { useEffect } from "react";
import { DashboardMainContainer } from "../../../components/DashboardMain/DashboardMain.styled";

const Tasks = () => {
    useEffect(() => {
        const getTasks = async () => {
            const response = await axios.get("/api/tasks/permitted-tasks");
            await console.log(response.data);
        };
        getTasks();

        return () => {};
    }, []);
    // status, key, title, priority, created at, updated at, assigned to,
    return (
        <DashboardMainContainer>
            <TasksContainer></TasksContainer>
        </DashboardMainContainer>
    );
};

export default Tasks;

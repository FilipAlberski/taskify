import React from "react";
import { TasksContainer } from "./tasks.styled";
import DashboardPicker from "../../../components/DashboardPicker/DashboardPicker";
import axios from "axios";
import { useEffect } from "react";
import FilteredTasks from "../../../components/FilteredTasks/FilteredTasks";
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

    return (
        <DashboardMainContainer>
            <TasksContainer>
                <FilteredTasks />
            </TasksContainer>
        </DashboardMainContainer>
    );
};

export default Tasks;

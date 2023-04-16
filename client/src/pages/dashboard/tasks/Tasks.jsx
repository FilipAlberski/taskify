import React from "react";
import { TasksContainer } from "./tasks.styled";
import TaskFilter from "../../../components/taskFilter/TaskFilter";
import { DashboardMainContainer } from "../../../components/DashboardMain/DashboardMain.styled";

const Tasks = () => {
    return (
        <DashboardMainContainer>
            <TasksContainer>
                <TaskFilter />

                <div className="tasks">test2</div>
            </TasksContainer>
        </DashboardMainContainer>
    );
};

export default Tasks;

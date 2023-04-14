import React from "react";
import { TasksContainer } from "./tasks.styled";

import { DashboardMainContainer } from "../../../components/DashboardMain/DashboardMain.styled";

const Tasks = () => {
    return (
        <DashboardMainContainer>
            <TasksContainer>
                <h1>Tasks</h1>

                <div className="tasks">test2</div>
            </TasksContainer>
        </DashboardMainContainer>
    );
};

export default Tasks;

import React from "react";
import { TasksContainer } from "./tasks.styled";
import DashboardPicker from "../../../components/DashboardPicker/DashboardPicker";

import { DashboardMainContainer } from "../../../components/DashboardMain/DashboardMain.styled";

const Tasks = () => {
    return (
        <DashboardMainContainer>
            <TasksContainer>
                <div className="tasks">test2</div>
            </TasksContainer>
        </DashboardMainContainer>
    );
};

export default Tasks;

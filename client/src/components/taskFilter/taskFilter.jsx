import React from "react";
import FormRow from "../formRow/FormRow";
import { TaskFilterWrapper } from "./TaskFilter.styled";
import { useState } from "react";

const TaskFilter = () => {
    const [advancedFilter, setAdvancedFilter] = useState(true);
    return (
        <TaskFilterWrapper>
            <form>
                <FormRow
                    label="Task Name"
                    type="text"
                    name="taskName"
                    labelText="Task Name: "
                    placeholder="Task Name"
                />
                <FormRow
                    label="Task Description"
                    type="text"
                    name="taskDescription"
                    labelText="Task Description: "
                    placeholder="Task Description"
                />

                {advancedFilter && (
                    <FormRow
                        label="Task Name"
                        type="text"
                        name="taskName"
                        labelText="Task Name: "
                        placeholder="Task Name"
                    />
                )}
            </form>
        </TaskFilterWrapper>
    );
};

export default TaskFilter;

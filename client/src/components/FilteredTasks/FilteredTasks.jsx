import React, { useState } from "react";
import axios from "axios";

const FilteredTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState({
        startDate: "",
        endDate: "",
        search: "",
    });

    const handleFilterChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { startDate, endDate, search } = filter;
        const params = {};

        if (startDate) params.startDate = startDate;
        if (endDate) params.endDate = endDate;
        if (search) params.search = search;

        try {
            const response = await axios.get("/api/tasks/filtered", {
                params,
            });
            if (response.data === "No tasks") {
                await setTasks([]);
                throw new Error("No tasks found");
            }
            await setTasks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={filter.startDate}
                        onChange={handleFilterChange}
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={filter.endDate}
                        onChange={handleFilterChange}
                    />
                </div>
                <div>
                    <label>Search:</label>
                    <input
                        type="text"
                        name="search"
                        value={filter.search}
                        onChange={handleFilterChange}
                    />
                </div>
                <button type="submit">Filter</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <p>Task Name: {task.name}</p>
                        <p>Task Description: {task.description}</p>
                        <p>Created At: {task.createdAt}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilteredTasks;

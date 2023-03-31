function checkPermission(user, project, task) {
    const isSuperadmin = user.roles.includes("superAdmin");
    const isMember = user._id in project.members;
    const isCoworker = user._id in task.coworkers;

    return isSuperadmin || isMember || isCoworker;
}

//export

module.exports = { checkPermission };

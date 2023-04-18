function checkPermission(user, project, task) {
    const isSuperadmin = user.roles.includes("superAdmin");

    //check if user is member of project by his id in members array but this is not working
    const isMember = user._id in project.members;

    const isCoworker = user._id in task.coworkers;

    //if user is super admin or member of project or coworker of task
    if (isSuperadmin || isMember || isCoworker) {
        return true;
    }

    return false;
}

//export

module.exports = { checkPermission };

function checkPermission(user, project, task) {
    const isSuperadmin = user.roles.includes("superAdmin");

    const isMember = project.members.find((member) => {
        return member._id == user._id;
    });
    console.log(isMember);
    const isCoworker = user._id in task.coworkers;

    //if user is super admin or member of project or coworker of task
    if (isSuperadmin || isMember || isCoworker) {
        return true;
    }

    return false;
}

//export

module.exports = { checkPermission };

function checkPermission(user, project, task) {
    const isSuperadmin = user.roles.includes("superAdmin");

    //check if user is member of project by his id in members array
    const isMember = project.members.some((member) => {
        return member.equals(user._id);
    });

    //check if user is coworker of task by his id in coworkers array

    const isCoworker = task.coworkers.some((coworker) => {
        return coworker.equals(user._id);
    });

    if (isSuperadmin || isMember || isCoworker) {
        return true;
    }

    return false;
}

//export

module.exports = { checkPermission };

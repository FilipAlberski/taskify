function checkPermission(user, project, task) {
    const isSuperadmin = user.roles.includes("superAdmin");

    const isMember = project.members.some((member) => {
        return member.equals(user._id);
    });

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

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get the User Details from DB..!');
        setTimeout(() => {
            resolve({
                userId: userId,
                userName: 'santosh'
            })
        }, 1000);

    })
}
function getServicesUsed(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get the services of ${user.userName} from the cloud`);
        setTimeout(() => {
            resolve(['EC2,VPN,CloudShell'])
        }, 3 * 1000);

    })
}
function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the cost of Services Used ...${services}`);
        setTimeout(() => {
            resolve(services.length * 100)
        }, 2 * 1000);

    })
}
getUser(101)
.then(getServicesUsed)
.then(getServiceCost)
.then(console.log)

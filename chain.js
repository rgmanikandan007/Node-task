// Function to simulate an asynchronous task
function asyncTask(taskName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${taskName} completed`);
            resolve(taskName);
        }, delay);
    });
}

// Task 1: Fetch user data
function fetchUserData() {
    return asyncTask("Fetching user data", 1000);
}

// Task 2: Fetch user's orders (dependent on user data)
function fetchUserOrders(userData) {
    return asyncTask(`Fetching orders for ${userData}`, 1500);
}

// Task 3: Process orders (dependent on user's orders)
function processOrders(ordersData) {
    return asyncTask(`Processing orders for ${ordersData}`, 1200);
}

// Chain promises
fetchUserData()
    .then((userData) => {
        return fetchUserOrders(userData);
    })
    .then((ordersData) => {
        return processOrders(ordersData);
    })
    .then((finalResult) => {
        console.log("All tasks completed:", finalResult);
    })
    .catch((error) => {
        console.error("Error in promise chain:", error);
    });

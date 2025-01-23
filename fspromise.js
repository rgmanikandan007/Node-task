const fs = require("fs").promises;

const fileOps = async () => {
    try{
        await fs.writeFile("user.txt", "Hi i'm new")
        console.log("write done");
    } catch(err) {
        console.log(err);
    }
}

fileOps()
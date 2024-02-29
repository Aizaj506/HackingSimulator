const randomDelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + 3 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    });
};

const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
};

const main = async () => {
    let interval = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
        } else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 800);

    let text = [
        "Initializing Hacking",
        "Reading Your Files",
        "Password File detected",
        "Sending all passwords and personal files to server",
        "Cleaning Up",
        "Done!!",
    ];

    for (const item of text) {
        await addItem(item);
    }

    await randomDelay();

    clearInterval(interval);
};

main();
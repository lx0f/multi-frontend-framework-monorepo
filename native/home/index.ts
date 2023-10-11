const root = document.getElementById("root")!;
root.innerText = "12345"

setTimeout(() => {
    root.innerText = "54321 reversed!"
}, 5000)
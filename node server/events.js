const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("stuff worked")
    } else {
        reject("Failed! It broke.")
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "HIIII")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "POOKIE")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10000, "HEY, WHATS UP DUDE!")
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })
    //.catch(() => console.log("Error!"))


// promise
//     .then(result => result + " !")
//     .then(result2 => result2 + "?")
//     .catch(() => console.log("Error!"))
//     .then(result3 => {
//         throw Error
//         console.log(result3 + "!!")
//     })

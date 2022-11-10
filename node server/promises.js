// const urls = [
//     'https://jsonplaceholder.typicode.com/posts', 
//     'https://jsonplaceholder.typicode.com/comments', 
//     'https://jsonplaceholder.typicode.com/users'
// ]

// Promise.all(urls.map(url => {
//     return fetch(url).then(resp => resp.json())
// })).then(results => {
//     throw Error
//     console.log(results[0])
//     console.log(results[1])
//     console.log(results[2])
// })
//     .catch(() => console.log("Error!"))
//     .finally(() => console.log("Extra"))






// for await of 

const urls = [
    'https://jsonplaceholder.typicode.com/postss', 
    'https://jsonplaceholder.typicode.com/comments', 
    'https://jsonplaceholder.typicode.com/userss'
]

// const getData = async () => {
//     try {
//         const [posts, comments, users] = await Promise.all(urls.map(async function(url) {
//             const response = await fetch(url)
//             return response.json()
//         }))
//            console.log('posts', posts)
//            console.log('comments', comments)
//            console.log('users', users)
//        } catch (err){
//         console.log("Oppps!", err)
//        } finally{
//         console.log("Extra!")
//        } 
//     }

//     getData()


    const getData2 = async () => {
        const arrayOfPromises = urls.map(url => fetch(url))
        for await (let request of arrayOfPromises) {
            const data = await request.json()
            console.log(data)
        } 
    }

    getData2()









// // ASYNC/AWAIT

// const urls = [
//     'https://jsonplaceholder.typicode.com/postss', 
//     'https://jsonplaceholder.typicode.com/commentss', 
//     'https://jsonplaceholder.typicode.com/userss'
// ]

// const fetchUsers = async () => {
//     try {
//         const [posts, comments, users] = await Promise.all(urls.map(url =>
//             fetch(url).then(resp => resp.json())
//        ))
//            console.log('posts', posts)
//            console.log('comments', comments)
//            console.log('users', users)
//        } catch (err){
//         console.log("Oppps!", err)
//        }
//     }
    


// fetchUsers()
// // fetch('https://jsonplaceholder.typicode.com/posts')
// //     .then(response => response.json())
// //     .then(json => console.log(json))
// //     .catch(() => console.log("Error"))


// const array =[1, 2, 3, 4, 5]
// const sum = (a, b, c, d, e) => {
//     return a + b + c + d + e
// }

// console.log(sum(...array))

// const animal = {
//     tiger: 23,
//     lion: 10,
//     monkey: 3,
//     goat: 1
// }

// function objectSpread(p1, p2, p3) {
//     console.log(p1)
//     console.log(p2)
//     console.log(p3)
// }

// const { tiger, lion, ...rest } = animal

// objectSpread(tiger, lion, rest)


// const numbers = [1, 2, 3, 4]
// const double = numbers.map(num => num * 2)
// console.log(double)

// const even = numbers.filter(num => num % 2 === 0)
// console.log(even)

// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];

//   const highGrades = students.filter(student => student.name.length >= 4)
//   console.log(highGrades)


// const promiseOne = new Promise((resolve, reject) => 
//     setTimeout(resolve, 3000))

// const promiseTwo = new Promise((resolve, reject) => 
//     setTimeout(reject, 3000))

// Promise.allSettled([promiseOne, promiseTwo])
//     .then(data => console.log(data))
//     .catch(e => console.log("Something failed", e))


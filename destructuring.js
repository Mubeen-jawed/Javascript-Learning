// let youtubeChannel = {
//   channelName: "Poe",
//   totalSubs: 6721,
//   totalViews: 46301
// }
// const {channelName: newChannel} = youtubeChannel
// const { ...hhh} = youtubeChannel
// console.log(hhh);

// const items1 = ["cookies", "choclates", "Wafers"]
// const [item, sweet] = items1
// console.log(item);


const users = [
  {
    id: 1,
    FirtName: "Mubeen",
    lastName: "Jawed",
    gender: "Male"
  },
  {
    id: 2,
    FirtName: "Bilal",
    lastName: "Ahmed",
    gender: "Male"
  },
  {
    id: 3,
    FirtName: "Rohail",
    lastName: "Qasim",
    gender: "Male"
  },
]

const [{id, FirtName}, {gender}] = users

console.log(FirtName);

// const object = {
//   question: "What is my name",
//   options: [
//     "Mubeen",
//     "Ismail",
//     "Adnan",
//   ],
//   answer: "mubeen"
// }

// const {} = object

// console.log(options);
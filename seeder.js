const client = require("./utils/database");
const {faker} = require('@faker-js/faker');
const { generateTokenResponce } = require("./utils/generateToken");
const bcrypt = require('bcryptjs');
const { profile } = require("./utils/database");
const { date } = require("joi");
//seeder function for the news 
// ( async () =>{
// for (let i=0;i<20;i++){
//     await client.news.create({
//         data:{
//             title:faker.lorem.lines(),
//             doneBy:"LinkedIn",
//             newsDetail: faker.lorem.paragraph(),
//             createdAt:new Date(),
//             readers:45663,
//         }
//     })
// }
// })()


// update the user 
// ( async () =>{
//     for (let i=0;i<20;i++){
//         let data = await client.users.create({
//            data:{
//             email:faker.internet.email(),
//             password:faker.color.human(),

//            }
//         })
//     }
//     })()


//seeding the user 
// const users = async ()=>{
//     for(let i=0 ;i<1000;i++){
//         const salt = await bcrypt.genSalt(10);
//         let password = await bcrypt.hash(faker.lorem.word(), salt);   
//          let data = await client.users.create({
//         data:{
//             email:faker.internet.email(faker.unique),
//             password:password,

//         }
//      })
//      let {token} = generateTokenResponce({
//         id: data.uid,
//       type: data.type?data.type:"user",
//       email: data.email,
//      })
//      let profile = await client.profile.create({
//         data:{
//             userid: data.uid,
//             firstName:faker.name.firstName(),
//             lastName:faker.name.lastName(),
//             addressid: "412318e3-1ddd-4d89-a9b8-3195c67778ae",
//             description:faker.lorem.paragraph(),
//             mobileNumber: faker.phone.number(),
//         }
//      })
//      await client.users.update({
//         where:{
//             uid:data.uid,
//         },
//         data:{
//             jsontoken:token,
//         }
//      })

// }
// }
// users()

//  

// const some  = async () =>{
//     await client.profile.updateMany({
//         where:{},
//         data:{
//             backgroundpic:"https://res.cloudinary.com/dibccigcp/image/upload/v1664890021/Background_japmti.svg"
//         }
//     })
// }
// some()
// const some  = async ()=>{
//     await client.userCompany.updateMany({
//         where:{},
//         data:{
//             startDate:new Date(Date.now()),
//             status:"Working",
//         }
//     })
// }
// const some  = async ()=>{
//         let profile = await client.profile.findMany({
//             select:{id:true}
//         })
//         profile.forEach( async ele =>{
//             await client.userEducation.create({
//                 data:{
//                     course:"Computer Science Engineering",
//                     startDate:new Date("2017-06-16"),
//                     endDate:new Date("2019-06-17"),
//                     description:faker.lorem.lines(),
//                     student:{
//                         connect:{
//                             id:"6052b4ef-7140-447c-a336-0a3849e36ead",
//                         }
//                     },
//                     useredu:{
//                         connect:{
//                             id:ele.id
//                         }
//                     }
//                 }
//             })
//         })
       
//     }
// some()
// const some  = async ()=>{
//     let profile = await client.profile.findMany({
//         select:{id:true}
//     })
//     profile.forEach( async ele =>{
//         await client.userCompany.create({
//             data:{
//                 position:"Assistant Engineer",
//                 startDate:new Date("2022-06-16"),
//                 status:"working",
//                 description:faker.lorem.lines(),
//                 company:{
//                     connect:{
//                         id:"ed718de1-b8fe-4f70-a543-29bea9830cfb",
//                     }
//                 },
//                 usercompany:{
//                     connect:{
//                         id:ele.id
//                     }
//                 }
//             }
//         })
//     })
   
// }
// some()

// 
// const some = async()=> {
//  await client.page.deleteMany({});

// }
// some()

// const some  = async()=>{
//   for(let i=0;i<10;i++){
//     await client.advertisement.create({
//         data:{
//             advertisemenLogo:faker.image.business(),
//             title:faker.lorem.word(),
//             type:"private",
//             about:faker.lorem.lines(),
//             company:{
//                 connect:{
//                     id:"f3b6784a-9e52-4a87-abac-1674769240de",
//                 }
//             },
//             records:{
//                 create:{
//                     displayed:faker.datatype.number(precision=0),
//                     viewed:faker.datatype.number(precision=0)
//                 }
//             }
//         }
    

//     })
// }
// }
const some  = async()=>{
    
}
some()
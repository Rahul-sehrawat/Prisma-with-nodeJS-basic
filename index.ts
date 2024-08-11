import { PrismaClient } from "@prisma/client";
import { create } from "domain";

const prisma = new PrismaClient();

async function main(){
    // ----- Create user ------
    // const user = await prisma.user.create({
    //     data:{
    //         name: 'Rahul',
    //         email: "rahul@gamil.com"
    //     },
    // });

    //----- Get all users -----
    // const users  = await prisma.user.findMany()
    const users = await prisma.user.findMany({
        include:{
            articles:true,
        }
    });
    // console.log(users)

    //----- Crete article and associate it with the user -----
    // const article = await prisma.article.create({
    //     data:{
    //         title:"rahul first article",
    //         body:"this article is about prisma basic",
    //         author:{
    //             connect:{
    //                 id:1
    //             }
    //         }
    //     }
    // })
    
    // console.log(article)


    //----- get all articles -----
    //    const articles = await prisma.article.findMany()
    //    console.log(articles)


    // Crete users and article and associate them
    // const user  = await prisma.user.create({
    //     data:{
    //         name: 'rue',
    //         email: 'rue1@gmial.com',
    //         articles:{
    //             create:{
    //                 title:'rue first article on this topic',
    //                 body: 'this is the body content'
    //             }
    //         }
    //     }
    // })

    // console.log(user);

    // Loop over users(rahul,rue) articles
    // users.forEach((user)=>{
    //     console.log(`user :${user.name}, email : ${user.email}`)
    //     console.log("articles:");
    //     user.articles.forEach((article)=>{
    //         console.log(`-Title: ${article.title}, Body:${article.body}`)
    //     })
    //     console.log('\n');
    // })

    // ----- Update data -----
 
    const user = await prisma.user.update({
        where:{
            id:1
        },
        data:{
            name : 'rahul sehrawat'
        }
    })

    console.log(user)

}

main()
    .then(async ()=>{
        await prisma.$disconnect();
    })
    .catch(async (e)=>{
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })
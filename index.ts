import { PrismaClient } from "@prisma/client";

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
    // const users = await prisma.user.findMany();

    //----- Crete article and associate it with the user -----
    const article = await prisma.article.create({
        data:{
            title:"rahul first article",
            body:"this article is about prisma basic",
            author:{
                connect:{
                    id:1
                }
            }
        }
    })
    
    console.log(article)
 



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
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    // Create user
    const user = await prisma.user.create({
        data:{
            name: 'Rahul',
            email: "rahul@gamil.com"
        },
    });





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
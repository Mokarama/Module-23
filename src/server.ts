import { prisma } from "./lib/prisma"

async function main(){
    try{
        await prisma.$connect();


    }
    catch(error){
        console.log("An error occurred: ", error)
    }
}
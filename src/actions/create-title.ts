'use server'

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { v4 as uuidv4 } from 'uuid';

function generateRandomString(length:number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
  
  
  
export async function createUrl(title: string,url: string){

    const {userId}=auth()
    if(!userId) return null
    
    if(!url && !title) return null
    const length = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    const encodedUrl = generateRandomString(length);
    await db.links.create({
        data:{
            userId,
            encodedUrl,
            title,
            url
        }
    })
}
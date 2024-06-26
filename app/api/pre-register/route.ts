import { NextRequest, NextResponse } from "next/server"
import z from 'zod'


const registerBody=z.object({
    email:z.string().email()
});

export async function POST (request: NextRequest) {
    const body = await request.json();
    const {success}=registerBody.safeParse(body);
  
  if(!success){
    return NextResponse.json({
       message:"Invalid email"
    },{
        status:411
    })
  }

    console.log(body);
    return NextResponse.json({
        message: "Done"
    })
}
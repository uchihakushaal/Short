import { db } from "@/lib/db";
import { notFound, redirect } from "next/navigation";


export default async function Page({ params }: { params: { id: string } }) {

  const link = await db.links.findUnique({
    where: {
      encodedUrl: params.id,
    },
  });

  console.log(!link,"p")
  if (!link) {
    notFound()
  }

  await db.view.create({
    data: {
      linksId:link?.id
    },
  });

 

  redirect(link.url);
}

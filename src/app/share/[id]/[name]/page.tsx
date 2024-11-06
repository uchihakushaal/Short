import { db } from "@/lib/db";
import { Ghost } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Page =async ({ params }: { params: { id: string; name: string } }) => {
    if (!params.id) {
        notFound()
      }
    
      const links = await db.links.findMany({
        where: {
          userId: params.id,
        },
        include: {
          views: true,
        },
      });
    

  return(
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col md:flex-row   items-start justify-between gap-4">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">{params.name}&apos;s links</h1>
      
      </div>
      {links && links?.length !== 0 ? (
        <ul className="mt-8 grid gird-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-3">
          {links
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((link) => (
              <li
                key={link.id}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition-all hover:shadow-lg "
              >
                <Link
                  href={`/${link.encodedUrl}`}
                  target="_blank"
                  className="flex flex-col gap-2"
                >
                  <div className="py-6 px-6 flex w-full items-center justify-between space-x-6">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-yellow-500 to-red-500" />
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-lg font-medium text-zinc-900">
                          {link.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              
              </li>
            ))}
        </ul>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2 ">
          <Ghost className="h-8 w-8 text-zinc-800" />
          <h3 className="font-semibold text-xl">Pretty empty around here</h3>
        </div>
      )}
    </main>
  );
};
export default Page;

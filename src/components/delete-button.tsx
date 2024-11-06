"use client"
import React from 'react'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { deleteUrl } from '@/actions/delete-url'
import { toast } from 'sonner'


export default function DeleteButton({id}:{id:string}) {

async function deleteUrlClient(){
  await deleteUrl(id)
  toast.success("Deleted successfully")
  window.location.href = "/dashboard";

}

  return (
  <Button variant="secondary" onClick={deleteUrlClient} >
    <Trash className='w-4 h-4'/>
  </Button>
  )
}

'use server'
import { redirect } from 'next/navigation'

export const goHome = () => {
  'use server'
  redirect("/")
}
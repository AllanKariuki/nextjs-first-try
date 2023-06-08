"use client";
import Image from 'next/image'
import LogIn from './login'
import { useAppSelector } from '@/redux/store';

export default function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username)
  const isModerator = useAppSelector((state) => state.authReducer.value.isModerator)
  return (
    <main className="flex min-h-screen flex-col items-center
     justify-between p-24">
      <LogIn/>
      <h1>Username: {username}</h1>
      {isModerator && <h1>This user is a Moderator</h1>}
    </main>
  )
}

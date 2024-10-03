import UserHeader from "@/components/dashboard/UserHeader"
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <UserHeader />
      {children}
    </main>
  )
}

export default layout

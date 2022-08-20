
import React,{ ReactNode } from "react"
import Header from "../Header";

import './Layout.scss'

type ChildrenPorps = {
  children:  ReactNode;
}


function Layout({ children } : ChildrenPorps) {
  return (
    <main className="main-layout">
      <Header />
      {children}
    </main>
  )
}

export default Layout
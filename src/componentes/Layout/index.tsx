
import React from "react"
import { Children } from "../../models/children.model";
import Header from "../Header";

import './Layout.scss'

function Layout({ children } : Children) {
  return (
    <main className="main-layout">
      <Header />
      {children}
    </main>
  )
}

export default Layout
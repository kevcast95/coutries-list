
import React from "react"
import { Children } from "../../models/children.model"

import './PopUp.scss'

function PopUp({children}: Children) {

  return (
    <div className="pop-up">
      {children}
    </div>
  )
}

export default PopUp
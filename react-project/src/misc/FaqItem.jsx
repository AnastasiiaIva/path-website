import { useState } from "react"

export function FaqItem({title, children}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

    return (
      <>

  <div className={"faq-item " + (isOpen ? "open" : "")}>
    <button className="faq-question" onClick={toggleOpen}>
      <span className="question-text">{title}</span>
      <span className="arrow"><img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/arrow_icon.png" alt="arrow icon"/></span>
    </button>
    <div className="faq-answer">
      {children}
    </div>
  </div>
</>
)
}
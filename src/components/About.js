import React from 'react'

export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
  }

  const aboutArray = [
    {
      heading: "Analyze Your text",
      description: "Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or transform text"
    },
    {
      heading: "Free to use",
      description: "TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. "
    },
    {
      heading: "Browser Compatible",
      description: "This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."
    }
  ]

  return (
    <div className='container mt-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

      {
        aboutArray.map((item, index) => {
          return <div className="accordion" id="accordionExample" key={index}> <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                {item.heading}
              </button>
            </h2>
            <div id={`collapse${index}`} className="accordion-collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                {item.description}
              </div>
            </div>
          </div>
          </div>
        })
      }



    </div>

  )
}

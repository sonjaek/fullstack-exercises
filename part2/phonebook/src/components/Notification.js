import React from 'react'

const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }

  if (type === 'error') {
    return (
      <div className="error">
      {message}
    </div>
    )
  } else if (type=== 'announcement') {
    return (
      <div className="announcement">
        {message}
      </div>
    )
  } else {
    return null
  }


}

export default Notification
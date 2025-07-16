import React from 'react'

const ProfilePage = ({name, description}) => {
  return (
    <div>
      <h3>Welcome Back, {name}</h3>
      <div>{description}</div>
    </div>
  )
}

export default ProfilePage
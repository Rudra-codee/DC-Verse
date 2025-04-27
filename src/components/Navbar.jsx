import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [openPopup, setOpenPopup] = useState(null) // 'notifications', 'settings', 'profile', or null
  const [menuOpen, setMenuOpen] = useState(false) // hamburger menu state
  const notificationsCount = 3

  const navRef = useRef(null)

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpenPopup(null)
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const togglePopup = (popupName) => {
    setOpenPopup((prev) => (prev === popupName ? null : popupName))
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <>
      <nav ref={navRef}>
        <div className="logo">
          <img src="https://cdn-ildialp.nitrocdn.com/DJtAMHECXJixhoMGDulhFImrpvplqoxn/assets/images/optimized/dcverse.in/wp-content/uploads/2023/05/DCLogo-removebg-preview.png" alt="" />
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </button>
        <div className={`options ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="pro">
          <div
            className="notifications-icon"
            onClick={() => togglePopup('notifications')}
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/6994/6994705.png?ga=GA1.1.1691864720.1745752236&semt=ais_hybrid"
              alt="Notifications"
            />
            {notificationsCount > 0 && (
              <span className="badge">{notificationsCount}</span>
            )}
            {openPopup === 'notifications' && (
              <div className="popup-box notifications-popup fade-in">
                <p>No new updates</p>
              </div>
            )}
          </div>
          <div
            className="settings-icon"
            onClick={() => togglePopup('settings')}
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/1186/1186255.png?ga=GA1.1.1691864720.1745752236&semt=ais_hybrid"
              alt="Settings"
            />
            {openPopup === 'settings' && (
              <div className="popup-box settings-popup fade-in">
                <ul>
                  <li>Change Theme</li>
                  <li>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                      Dark Mode
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="profile-icon"
            onClick={() => togglePopup('profile')}
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/9507/9507041.png?ga=GA1.1.1691864720.1745752236&semt=ais_hybrid"
              alt="Profile"
            />
            {openPopup === 'profile' && (
              <div className="popup-box profile-popup fade-in">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
                <button className="logout-button">Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

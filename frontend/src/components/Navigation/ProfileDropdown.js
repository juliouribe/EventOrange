import { useState } from "react";

export default function ProfileDropdown({ email }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button>
        <i className="fa-solid fa-user-circle" />
        {email}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <li>Browse Events</li>
          <li>RSVPs</li>
          <li>Log Out</li>
        </div>
      )}
    </div>
  )
}

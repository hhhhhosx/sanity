import React, {useState} from 'react'
import UsersIcon from 'part:@sanity/base/users-icon'
import useCollaborators from 'part:@sanity/base/hooks/collaborators'
import styles from './GlobalStatus.css'
import PopoverList from './PopoverList'

export default function GlobalStatus() {
  const [isOpen, setIsOpen] = useState(false)
  const users = useCollaborators()

  const handlePresenceMenuToggle = () => setIsOpen(!isOpen)

  return (
    <div className={styles.root}>
      <PopoverList
        users={users}
        avatarSize="medium"
        withStack={false}
        trigger="click"
        distance={-2}
      >
        <button
          className={`${styles.button} ${isOpen ? styles.isOpen : ''}`}
          title="Show users"
          type="button"
        >
          <div className={styles.icon}>
            {users.length > 0 && (
              <div className={styles.statusIndicator} aria-label={`Online collaborators`} />
            )}
            <UsersIcon />
          </div>
        </button>
      </PopoverList>
    </div>
  )
}
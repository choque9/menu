import React from 'react'
import { defineMessages } from 'react-intl'

import styles from './styles/Global.css'

const Menu: StorefrontFunctionComponent = ({ children }) => {
  return <div className={`${styles.menuContainer}`}>{children}</div>
}

const messages = defineMessages({
  menuTitle: {
    defaultMessage: '',
    id: 'admin/editor.future-menu.title',
  },
})

Menu.getSchema = () => {
  return {
    title: messages.menuTitle.id,
  }
}

export default Menu

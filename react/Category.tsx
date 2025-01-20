import React, { useState } from 'react'
import { Collapsible } from 'vtex.styleguide'
import { defineMessages } from 'react-intl'

import styles from './styles/Global.css'

interface Category {
  label: string
  link: string
}

const Category: StorefrontFunctionComponent<Category> = ({
  label,
  link,
  children,
}) => {
  const [isOpen, setState] = useState(false)

  return (
    <div className={`${styles.rowCategoryContainer}`}>
      <Collapsible
        header={<span>{label}</span>}
        onClick={(_e: any) => setState(!isOpen)}
        isOpen={isOpen}
        caretColor="base"
      >
        {children}
      </Collapsible>
      <div className={`${styles.arrowButton}`}>
        <a href={link}> &gt; </a>
      </div>
    </div>
  )
}

const messages = defineMessages({
  categoryTitle: {
    defaultMessage: '',
    id: 'admin/editor.category.title',
  },
})

Category.getSchema = () => {
  return {
    title: messages.categoryTitle.id,
  }
}

export default Category

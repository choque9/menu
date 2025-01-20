import React from 'react'
import { defineMessages } from 'react-intl'

import styles from './styles/Global.css'

interface SubCategory {
  label: string
  link: string
}

const SubCategory: StorefrontFunctionComponent<SubCategory> = ({
  label,
  link,
}) => {
  return (
    <div className={`${styles.subCategoryContainer}`}>
      <div>
        <span>{label}</span>
      </div>
      <div className={`${styles.arrowButton}`}>
        <a href={link}> &gt; </a>
      </div>
    </div>
  )
}

const messages = defineMessages({
  subcategotyTitle: {
    defaultMessage: '',
    id: 'admin/editor.subcategory.title',
  },
})

SubCategory.getSchema = () => {
  return {
    title: messages.subcategotyTitle.id,
  }
}

export default SubCategory

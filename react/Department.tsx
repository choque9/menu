import React, { useState } from 'react'
import { Collapsible } from 'vtex.styleguide'
import { defineMessages } from 'react-intl'

import styles from './styles/Global.css'

interface DepartmentSchema {
  label: string
  link: string
}

const Department: StorefrontFunctionComponent<DepartmentSchema> = ({
  label,
  link,
  children,
}) => {
  const [isOpen, setState] = useState(false)

  return (
    <div className={`${styles.rowDepartmentContainer}`}>
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
  departmentTitle: {
    defaultMessage: '',
    id: 'admin/editor.department.title',
  },
})

Department.getSchema = () => {
  return {
    title: messages.departmentTitle.id,
  }
}

export default Department

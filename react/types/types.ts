export interface Subcategory {
  label: string
  link: string
}

export interface Category {
  label: string
  link: string
  subcategories: Subcategory[]
}

export interface MenuType {
  link: string
  label: string
  categories: Category[]
}

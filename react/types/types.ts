export interface Subcategory {
    name: string;
}

export interface Category {
    name: string;
    subcategories: Subcategory[];
}

export interface MenuType {
    name: string;
    categories: Category[];
}

export interface MobileMenuProps {
    menu: MenuType[];
}

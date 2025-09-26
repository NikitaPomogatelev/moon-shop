import { useState } from 'react';
import styles from "./CategoryTabs.module.css";
import CategoryTab from './CategoryTab';
import SubCategoryTab from './SubCategoryTab';

const subCategories = [
  {id: 1, anchor: "podbor", label: "Подборка" },
  {id: 2, anchor: "catalog", label: "Каталог" },
  {id: 3, anchor: "promo", label: "Акции" },
  {id: 4, anchor: "onmap", label: "На карте" },
  {id: 5, anchor: "favorites", label: "Избранное" },
  {id: 6, anchor: "marks", label: "Мои записи" },
];


const SubCategoryNav = () => {
	const [activeId, setActiveId] = useState("podbor");
	
	 return (
		 <div className={styles['sub-tabs__row']}>
				<h2 className={styles['sub-tabs__title']}>Красота</h2>
				<div className={styles['sub-tabs__group']}>
					{subCategories.map((cat) => (
						<SubCategoryTab
							key={cat.id}
							anchor={cat.anchor}
							label={cat.label}
							isActive={cat.anchor === activeId}
							onClick={() => setActiveId(cat.anchor)}
						/>
					))}
				</div>
		 </div>
  );
}

export default SubCategoryNav

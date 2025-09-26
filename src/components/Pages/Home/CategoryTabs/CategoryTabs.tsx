import { useState } from 'react';
import styles from "./CategoryTabs.module.css";
import CategoryTab from './CategoryTab';

const categories = [
  {id: 1, anchor: "beauty", label: "Красота" },
  {id: 2, anchor: "health", label: "Здоровье" },
  {id: 3, anchor: "sport", label: "Спорт" },
  {id: 4, anchor: "auto", label: "Авто" },
  {id: 5, anchor: "pets", label: "Животные" },
  {id: 6, anchor: "more", label: "Ещё" },
];


const CategoryTabs = () => {
	const [activeId, setActiveId] = useState("beauty");
	
	 return (
    <div className={styles['category-tabs__group']}>
      {categories.map((cat) => (
        <CategoryTab
          key={cat.id}
					anchor={cat.anchor}
          label={cat.label}
          isActive={cat.anchor === activeId}
          onClick={() => setActiveId(cat.anchor)}
        />
      ))}
    </div>
  );
}

export default CategoryTabs

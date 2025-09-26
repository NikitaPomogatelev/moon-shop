export interface FooterLink {
	id: number;
  label: string;
  href: string;
}

export interface FooterColumn {
  id: number;
  title: string;
  groups: FooterLink[][];
}

export const footerColumns: FooterColumn[] = [
  {
		id: 1,
    title: "Информация",
    groups: [
      [
        { id: 1, label: "О компании", href: "#" },
        { id: 2, label: "Обратная связь", href: "#" },
        { id: 3, label: "Работа у нас", href: "#" },
      ],
      [
        { id: 4, label: "Партнерская программа", href: "#" },
        { id: 5, label: "Политика конфиденциальности", href: "#" },
        { id: 6, label: "Пользовательское соглашение", href: "#" },
      ],
    ],
  },
  {
		id: 2,
    title: "Профессионалам",
    groups: [
      [
        { id: 7, label: "О сервисе", href: "#" },
        { id: 8, label: "Требование к информации", href: "#" },
        { id: 9, label: "База знаний", href: "#" },
      ],
    ],
  },
];

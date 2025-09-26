import type { ButtonHTMLAttributes } from 'react';

export interface SliderArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	direction: 'prev' | 'next'
}

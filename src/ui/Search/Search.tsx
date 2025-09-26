import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import type { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = false,  className, ...props }, ref) {
	return <div className={cn(styles['input-wrapper'], className)}>
		<span className={styles['input-icon']}>
			<img src="/search-icon.svg" alt="Иконка лупы" />
		</span>
		<input ref={ref} className={cn(styles['input'], {
			[styles['invalid']]: isValid
		})} {...props} />
	</div>;
	
});

export default Search;

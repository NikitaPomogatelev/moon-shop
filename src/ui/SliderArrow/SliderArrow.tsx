import ArrowIcon from '../../components/Icon/ArrowIcon';
import styles from './SliderArrow.module.css';
import type { SliderArrowProps } from './SliderArrow.props';
import cn from 'classnames';


function SliderArrow({ direction = 'prev', className, ...props }: SliderArrow) {
	return (
		<button className={cn(styles['slider-arrow'], styles[direction], className)} {...props}><ArrowIcon /></button>
	);
}

export default SliderArrow

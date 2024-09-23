import classes from './meal-item.module.css';

import Link from 'next/link';
import Image from 'next/image';



export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <div className='flex flex-col'>
        <div className={classes.image}>
          <Image 
            src={image} 
            alt={title} 
            fill 
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </div>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
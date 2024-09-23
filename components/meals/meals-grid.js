import MealItem from './meal-item';

export default function MealsGrid({ meals }) {
    return (
        <ul className='w-11/12 grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-20 my-8 mx-auto list-none p-0'>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
            ))}
        </ul>
    )
}
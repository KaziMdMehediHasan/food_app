export default function MealDetails({ params }) {
    return (
        <>
            <h1>{`This is a ${params.slug} recipe`}</h1>
        </>
    )
}
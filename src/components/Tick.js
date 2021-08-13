export default function TickList({ tick, key }) {
  return (
    <>
      <p>Past tick: quality rating: {tick.quality_rating} difficulty: {tick.difficulty_grade} comment: {tick.comment} date added: {tick.createdAt}</p>
      <br />
    </>
  )
}


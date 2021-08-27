import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';

export default function Star({ rating, starColor, starId, onMouseEnter, onMouseLeave, onClick }) {
  let styleColor = starColor.unfilled
  if (rating >= starId) {
    styleColor = starColor.filled
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave, onClick}
      onClick={onClick}
    >
      <StarRateRoundedIcon style={{ color: styleColor }} />
    </div>
  )
}

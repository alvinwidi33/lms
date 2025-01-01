import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardCourse({
    imageUrl = "/assets/images/thumbnails/th-3.png",
    id = '1',
    title = 'Responsive Design Triclorem Lorem, ipsum dolor',
    category = "Programming"
}) {
  return (
    <div className="card flex items-center gap-5">
      <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
      </div>
      <div className="w-full">
        <Link
          to="/student/detail-course/1"
          className="font-bold text-xl leading-[30px] line-clamp-1"
        >
          {title}
        </Link>
        <div className="flex items-center gap-[6px] mt-[6px]">
          <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
          <p className="text-[#838C9D]">{category}</p>
        </div>
      </div>
    </div>
  );
}
CardCourse.proptypes = {
    imageUrl: Proptypes.string,
    id : Proptypes.string,
    title : Proptypes.string,
    category : Proptypes.string
}
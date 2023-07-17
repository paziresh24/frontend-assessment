import { LikeIcon } from "../../icons/icons";

export const Satisfaction = ({ satisfaction, commentsCount }) => {
  return (
    <div className='flex items-center gap-1'>
      <div className='flex items-center gap-1 px-3 py-1 rounded-full bg-green-600'>
        <LikeIcon className='text-white' />
        <p className='font-bold text-white text-sm'>{satisfaction}%</p>
      </div>
      <p className='font-medium text-sm'>Satisfaction</p>
      <p className='font-medium text-sm'>{`(${commentsCount} comments)`}</p>
    </div>
  );
};

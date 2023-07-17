import { ViewIcon } from "../../icons/icons";
import formatThousand from "../../../utils/formatThousand";

export const ViewCount = ({ viewCount }) => {
  return (
    <div className='flex items-center gap-1'>
      <ViewIcon />
      <p>{formatThousand(viewCount)}</p>
    </div>
  );
};

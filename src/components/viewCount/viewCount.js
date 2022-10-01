import { ViewIcon } from "../icons";

export const ViewCount = ({ count }) => {
  // number format : 32000 -> 32K

  return (
    <div className="flex items-center gap-1">
      <ViewIcon />
      <span className="text-sm font-medium">{count}</span>
    </div>
  );
};

export default ViewCount;

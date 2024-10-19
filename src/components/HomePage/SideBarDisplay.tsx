import { SegmentProps } from "../../types/types";
import SegmentCounter from "./SegmentCounter";
import SubmenuButton from "./SideBar/SubmenuButton";

const SideBarDisplay: React.FC<SegmentProps> = ({ segmentNumber, segments, goToSegment }) => {
  return (
    <>
      <div className="fixed right-12 top-12">
        <SubmenuButton />
      </div>

      <div className="fixed right-12 top-1/2 transform -translate-y-1/2">
        <SegmentCounter segmentNumber={segmentNumber} segments={segments} goToSegment={goToSegment} />
      </div>
    </>
  );
};

export default SideBarDisplay;
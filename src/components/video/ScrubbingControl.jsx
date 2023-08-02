import "./ScrubbingControl.scss";
const ScrubbingControl = ({ playTime, bufferTime, durationTime }) => {
  return (
    <div className="scrubbing-control">
      <span className="scrubbing-control__track"></span>
      <p className="scrubbing-control__duration">
        {playTime}/{durationTime}
      </p>
    </div>
  );
};
export default ScrubbingControl;

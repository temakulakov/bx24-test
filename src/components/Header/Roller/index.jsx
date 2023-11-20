import "./Roller.css";
import {useRecoilValue} from "recoil";
import {stepFormState} from "../../../store";

const Roller = () => {
    const setState = useRecoilValue(stepFormState);
    const rollerView = () => {
        switch (setState) {
            case 0:
                return {
                strokeDasharray: "0, 1"
            }
            case 1:
                return {
                    strokeDasharray: ".33, 1"
                }
            case 2:
                return {
                    strokeDasharray: ".66, 1"
                }
            case 3:
                return {
                    strokeDasharray: "1.1, 1"
                }
            default:
                return {
                    strokeDasharray: "0, 1"
                }
        }
    }

    return <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="roller-bg"></circle>
            <circle cx="50" cy="50" r="30" pathLength="1" className="roller-indicator" style={rollerView()}></circle>
        </svg>

};

export default Roller;
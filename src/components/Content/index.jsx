import "./Content.css"
import { useRecoilValue } from "recoil";
import { stepFormState } from "../../store";
import Input from "./Input";
import Table from "./Table";
const Content = () => {
    const stepState = useRecoilValue(stepFormState);
    return <div className={"content"}>
        {stepState === 0 ? <Input/> : true}
        {stepState === 1 ? <Table/> : true}
    </div>
};

export default Content;

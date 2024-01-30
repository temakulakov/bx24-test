import "./Content.css"
import { useRecoilValue } from "recoil";
import { stepFormState } from "../../store";
import Input from "./Input";
import Table from "./Table";
import Watermark from "./Watermark";
import Finish from "./Finish";
import TableSecond from "./TableSecond";
const Content = () => {
    const stepState = useRecoilValue(stepFormState);
    return <div className={"content"}>
        {stepState === 0 ? <Input/> : true}
        {stepState === 1 ? <Watermark/> : true}
        {stepState === 2 ? <Table/> : true}
        {stepState === 3 ? <TableSecond/> : true}
        {stepState === 4 ? <Finish/> : true}
    </div>
};

export default Content;

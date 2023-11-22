import "./Finish.css"
import img from "../../../emojibest_com_animated_emojies_4.gif";

const Finish = () => {
    return <div className={"finish"}>
        <h2>
            {`Поздравляем! Данные успешно отправлены`}
        </h2>
        <img src={img} alt={""}/>
    </div>
};

export default Finish;
import { useContext } from "react";

import { Context } from "../../services/Memory";
import Goal from "./Goals";

const List = () => {

    const [state, dispatch] = useContext(Context);

    return (
        state.order.map(id => <Goal key={id} {...state.objects[id]} />)
    );
}
 
export default List;
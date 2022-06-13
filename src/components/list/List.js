import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Context } from "../../services/Memory";
import Goal from "./Goals";

const List = () => {

    const [state] = useContext(Context);

    return (
        <>
            {state.order.map(id => <Goal key={id} {...state.objects[id]} />)}
            <Outlet />
        </>
    );
}
 
export default List;
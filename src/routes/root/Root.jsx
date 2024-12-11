import { NavLink, Outlet } from 'react-router-dom';

import s from "./Root.module.css"

export const Root = () => {
    return (
        <div className={s.con}>
            <nav>
                <NavLink to="/todo">
                    <button className='RouteButton'>Todo</button>
                </NavLink>
                <NavLink to="/notes">
                    <button className='RouteButton'>Notes</button>
                </NavLink>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
};


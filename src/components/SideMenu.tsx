import { MENU_OPTIONS } from '../constants/menu-options'
import { SideMenuAvatar } from './SideMenuAvatar'
import { SideMenuItem } from './SideMenuItem'

export const SideMenu = () => {
    return (
        <nav className='hidden md:block w-full shadow-xl shadow-indigo-100 rounded-3xl sm:w-3/12 lg:w-2/12 p-5 bg-white'>
            <SideMenuAvatar/>
            <ul>
                {
                    MENU_OPTIONS.map(item => (
                        <SideMenuItem key={ item.path } item={ item }/>
                    ))
                }
            </ul>
        </nav>
    )
}


import { CgProfile } from 'react-icons/cg'
import { BsCardChecklist} from 'react-icons/bs'
import { GiHouse} from 'react-icons/gi'
import {BsGraphUp} from 'react-icons/bs'
import {TbMathSymbols} from 'react-icons/tb'
import {GiReceiveMoney, GiPayMoney} from 'react-icons/gi'

const color="hover:text-[#4cc69f] "
const size="20px"
export const Sidebardata = [
            {
                title:"Home",
                path:"/home",
                icon:<GiHouse size={size}  />,
            },
            {
                title:"Income",
                path:"/income",
                icon:<GiReceiveMoney size={size} className={color}  />,
            },
            {
                title:"Expense",
                path:"/expense",
                icon:<GiPayMoney size={size} className={color}  />,
            },
            {
                title:"Analysis",
                path:"/analysis",
                icon:<BsGraphUp size={size} className={color}  />,
            },
            {
                title:"Formulas",
                path:"/formula",
                icon:<TbMathSymbols size={size}  />,
            },
            {
                title:"Todo",
                path:"/todo",
                icon:<BsCardChecklist size={size} />,
            },
            {
                title:"Profile",
                path:"/profile",
                icon:<CgProfile size={size} />,
            }
        ]
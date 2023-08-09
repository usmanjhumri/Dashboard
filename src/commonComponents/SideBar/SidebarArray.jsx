import { HiMail } from 'react-icons/hi'
import { BiHelpCircle } from 'react-icons/bi'
export const SideBarArray = [
    {
        text1: "Today's rides",
        text2: "1",
        to: '/',
        childerns: [
            {
                text1: "Awaiting pickup",
                text2: '-',
                to: 'awaitingpickup'
            },
            {
                text1: "In Progress",
                text2: '-',
                to: 'inprogress'
            },
            {
                text1: "Completed",
                text2: '1',
                to: 'completed'
            },
            {
                text1: "Upcoming",
                text2: '-',
                to: 'upcoming'
            },

        ]
    },
    {
        text1: "Future rides",
        // text2: "Spirits   win   bear",
        to: '/one'

    },
    {

        text1: "Drafts",
        // text2: "Spirits   win   bear",
        to: '/two'

    },
    {
        text1: "Past rides",
        // text2: "Spirits   win   bear",
        to: '/three'

    },
]




export const SideBarArray2 = [
    {
        text: "Need Help?",
    },
    {
        icon: <HiMail />,
        title: "Email support",
    },
    {
        icon: <BiHelpCircle />,
        title: "Help Center",
    },
    {
        text: "Terms & Conditions",
    }, {
        text: "Legal",
    },
]
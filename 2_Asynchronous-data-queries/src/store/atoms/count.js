import { atom, selector } from 'recoil'
import axios from 'axios'

export const notificationsCount = atom({
    key: "notificationsCount",
    default: selector({
        key: "notificationsSelector",
        get: async () => {
            const res = await axios.get('https://sum-server.100xdevs.com/notifications')
            return res.data
        }
    }) 
})
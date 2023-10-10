import {  useEffect } from 'react'
import axios from 'axios'
import {localHost} from '../utils/helpers'

const useUser = (user, setUser) => {

   
        const getUser = async () => {
            debugger
          const url = `${localHost}/db`
          try {
            const { data } = await axios.get(url)
            const userFound = data
            console.log(userFound)
            if (userFound) {
              setUser(userFound)
            }
          } catch (error) {
            console.log(error)
          }
        }
        
    
        getUser();
  
}
export default useUser;

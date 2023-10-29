import { useEffect, useState } from 'react';
import axios from 'axios';
import { localHost } from '../utils/helpers';

const useUser = () => {
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    try {
      const url = `${localHost}/db`;
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUser();
      setUserData(result);
    };

    fetchData();
  }, []);

  return userData;
};

export default useUser;

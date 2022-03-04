import { useCallback } from 'react';

import { notificationsState } from '@/context/notification';
import { useRecoilState } from 'recoil';

import { generateUUidV4 } from '@/utils/helpers';

const useNotifications = () => {
  const [notifications, setNotifications] = useRecoilState(notificationsState);

  const setNotification = useCallback(
    (notification) => {
      const newNotification = {
        id: generateUUidV4(),
        ...notification,
      };
      setNotifications((prevState) => [...prevState, newNotification]);
    },
    [setNotifications]
  );

  const closeNotification = (removeId) => {
    if (!removeId) {
      setNotifications((prevState) => prevState.slice(1));

      return;
    }

    const filterNotifications = notifications.filter((item) => item.id !== removeId);
    setNotifications(filterNotifications);
  };

  return { notifications, setNotification, closeNotification };
};

export default useNotifications;

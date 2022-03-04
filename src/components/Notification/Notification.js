import useNotification from '@/hooks/useNotification';

import clsx from 'clsx';
import InPortal from '@/components/InPortal';
import NotificationItem from '@/components/Notification/NotificationItem';

import { getNotificationPlacementContainer } from '@/utils/helpers';

const NotificationContainer = ({ className, children }) => {
  return (
    <div className={clsx(className, 'absolute flex flex-col gap-3 overflow-hidden p-6')}>
      {children}
    </div>
  );
};

export default function Notification() {
  const { notifications } = useNotification();

  const renderNotification = (data) => {
    return data.map((item) => <NotificationItem key={item.id} data={item} />);
  };

  if (notifications.length === 0) return null;

  const topRightNotifications = getNotificationPlacementContainer(notifications, 'top-right');
  const topLeftNotifications = getNotificationPlacementContainer(notifications, 'top-left');
  const bottomRightNotifications = getNotificationPlacementContainer(notifications, 'bottom-right');
  const bottomLeftNotifications = getNotificationPlacementContainer(notifications, 'bottom-left');

  return (
    <InPortal>
      <NotificationContainer className="top-0 left-0">
        {renderNotification(topLeftNotifications)}
      </NotificationContainer>

      <NotificationContainer className="top-0 right-0">
        {renderNotification(topRightNotifications)}
      </NotificationContainer>

      <NotificationContainer className="bottom-0 left-0">
        {renderNotification(bottomLeftNotifications)}
      </NotificationContainer>

      <NotificationContainer className="bottom-0 right-0">
        {renderNotification(bottomRightNotifications)}
      </NotificationContainer>
    </InPortal>
  );
}

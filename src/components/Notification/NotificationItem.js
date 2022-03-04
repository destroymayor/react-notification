import { useEffect, useState } from 'react';

import useNotification from '@/hooks/useNotification';

import clsx from 'clsx';

import severityTypes from '@/constants/severity-types';
import placementTypes from '@/constants/placement-types';
import { sleep } from '@/utils/helpers';

import { XIcon } from '@heroicons/react/solid';

export default function NotificationItem(props) {
  const { data } = props;
  const { closeNotification } = useNotification();

  const { id, severity, message, duration = 3000, placement = 'top-right' } = data;
  const { icon, title, borderColor, color } = severityTypes[severity];

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = async (id) => {
    await setIsOpen(false);
    await sleep(300);
    await closeNotification(id);
  };

  useEffect(() => {
    const openTimer = setTimeout(() => setIsOpen(true), 200);

    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    let closeTimer;
    if (duration != 0) {
      closeTimer = setTimeout(() => handleClose(), duration);
    }

    return () => clearTimeout(closeTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={clsx(
        `${isOpen ? placementTypes?.[placement]?.open : placementTypes?.[placement]?.close}`,
        `border-l-8 ${borderColor}`,
        'relative flex min-w-[380px] max-w-[380px] justify-between',
        'p-4',
        'rounded-lg bg-gray-50 drop-shadow-lg',
        'transform transition duration-300 ease-in-out'
      )}
    >
      <div className="flex flex-1 gap-2">
        <span>{icon}</span>
        <div className="flex flex-col">
          <h1 className={`font-bold ${color}`}>{title}</h1>
          <p className="py-2 text-sm text-gray-500">{message}</p>
        </div>
      </div>
      <div>
        <XIcon
          className="h-7 w-7 cursor-pointer rounded-full p-1 text-gray-500 transition duration-150 ease-in-out hover:bg-gray-300"
          onClick={() => handleClose(id)}
        />
      </div>
    </div>
  );
}

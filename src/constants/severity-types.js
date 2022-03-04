import {
  CheckCircleIcon,
  ExclamationIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';

const severityTypes = {
  info: {
    title: 'Info',
    borderColor: 'border-blue-500',
    color: 'text-blue-500',
    icon: <InformationCircleIcon className="h-6 w-6 text-blue-500" />,
  },
  success: {
    title: 'Success',
    borderColor: 'border-green-600',
    color: 'text-green-600',
    icon: <CheckCircleIcon className="h-6 w-6 text-green-600" />,
  },
  warning: {
    title: 'Waring',
    borderColor: 'border-orange-600',
    color: 'text-orange-600',
    icon: <ExclamationIcon className="h-6 w-6 text-orange-600" />,
  },
  error: {
    title: 'Error',
    borderColor: 'border-red-600',
    color: 'text-red-600',
    icon: <ExclamationCircleIcon className="h-6 w-6 text-red-600" />,
  },
};

export default severityTypes;

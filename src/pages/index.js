import Head from 'next/head';

import useNotifications from '@/hooks/useNotification';

export default function Home() {
  const { setNotification } = useNotifications();
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>React Notification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-10">
        <h1 className="text-4xl">React Notification</h1>
      </header>

      <div className="flex flex-col items-center justify-center gap-2">
        <h2>Placement</h2>
        <div className="flex gap-2">
          <button
            className="rounded-md border p-2"
            onClick={() =>
              setNotification({
                severity: 'success',
                message: 'test',
                placement: 'top-left',
              })
            }
          >
            Top Left
          </button>

          <button
            className="rounded-md border p-2"
            onClick={() =>
              setNotification({
                severity: 'warning',
                message: 'test',
                placement: 'top-right',
              })
            }
          >
            Top Right
          </button>
        </div>

        <div className="flex gap-2">
          <button
            className="rounded-md border p-2"
            onClick={() =>
              setNotification({
                severity: 'info',
                message: 'test',
                placement: 'bottom-left',
              })
            }
          >
            Bottom Left
          </button>

          <button
            className="rounded-md border p-2"
            onClick={() =>
              setNotification({
                severity: 'error',
                message: 'test',
                placement: 'bottom-right',
              })
            }
          >
            Bottom right
          </button>
        </div>
      </div>
    </div>
  );
}

// fectching data nextjs 13

interface Time {
  unixtime: number
}

async function getCurrentTime() {
  // similar to getServersideProps
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Chicago',
    // {
    //   cache: 'no-cache',
    //   headers: {
    //     'x-foo': 'bar',
    //   },
    // } or

    // this will revalidate the data in this timelapse
    {
      next: {
        revalidate: 60,
      },
    }
  )

  const time: Promise<Time> = await res.json()
  return time
}

export default async function SSRPage() {
  const time = await getCurrentTime()

  return (
    <div>
      <h1>Time in chicago</h1>
      <p>{new Date(time.unixtime * 1000).toString()}</p>
    </div>
  )
}

/**
 * Fetcher script that should be combined with
 * the SWR Vercel library like in the example provided below.
 * @example const { data, error } = useSWR('/api/user', fetcher)
 * @example https://swr.vercel.app/examples/basic
 * @param url
 * @return {Promise<any>}
 */

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default fetcher;

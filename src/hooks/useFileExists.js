import { useEffect, useState } from 'react'
// true | false | null (checking). Detects a real file (not the SPA fallback page).
export function useFileExists(path) {
  const [ok, setOk] = useState(null)
  useEffect(() => {
    let live = true
    fetch(`${import.meta.env.BASE_URL}${path}`, { method: 'HEAD' })
      .then((r) => live && setOk(r.ok && !(r.headers.get('content-type') || '').includes('text/html')))
      .catch(() => live && setOk(false))
    return () => { live = false }
  }, [path])
  return ok
}

export function storeCSRFToken(response) {
  const csrfToken = response.headers.get('X-CSRF-Token');
  if (csrfToken) {
    sessionStorage.setItem('X-CSRF-Token', csrfToken);
  }
}

export async function restoreCSRF() {
  const res = await fetch('/api/session');
  storeCSRFToken(res);
  return res
}


async function csrfFetch(url, options = {}) {
  // Set defaults incase headers or method are empty.
  options.headers = options.headers || {};
  options.method = options.method || 'GET';

  // If we're using a non-GET check sessionStorage for token if not already part
  // of options object.
  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
    options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
  }

  const res = await fetch(url, options);

  if (res.status >= 400) {
    throw res;
  } else {
    return res
  }
}

export default csrfFetch;

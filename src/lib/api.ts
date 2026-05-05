export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3001';

export function getAuthHeaders(): Record<string, string> {
  const token = typeof window !== 'undefined' ? window.localStorage.getItem('token') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function handleResponse<T>(response: Response): Promise<T> {
  const text = await response.text();
  try {
    return text ? JSON.parse(text) : ({} as T);
  } catch {
    throw new Error(`Invalid JSON response from ${response.url}`);
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders()
    },
    credentials: 'include'
  });

  if (!response.ok) {
    const errorBody = await handleResponse<{ error?: string }>(response);
    throw new Error(errorBody.error || `Request failed with status ${response.status}`);
  }

  return handleResponse<T>(response);
}

export async function apiPost<T>(path: string, body: any): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders()
    },
    credentials: 'include',
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorBody = await handleResponse<{ error?: string }>(response);
    throw new Error(errorBody.error || `Request failed with status ${response.status}`);
  }

  return handleResponse<T>(response);
}

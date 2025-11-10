#counter
import { api } from "@/api.tsx"
export default function Counter() {
  response = api.get('toastCounter')
  if (response.ok) {
    api.post('toastCounter', 'responses', response.returned)
  }
}

import type { Config } from '@/@types/vitest'

export const VitestEnv: Readonly<Config> = {
  VITE_API_URL: import.meta.env.VITE_API_URL,
}

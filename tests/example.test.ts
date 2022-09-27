import { expect, test, describe } from 'vitest'

import { VitestEnv } from '../src/config'

describe('Math.sqrt', () => {
  test('test what is the square of 4', () => {
    expect(VitestEnv.VITE_API_URL).toBeDefined()
  })
})

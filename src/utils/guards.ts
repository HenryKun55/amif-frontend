export function hasKey<K extends string, T extends object>(
  key: K,
  obj: T,
): obj is T & Record<K, unknown> {
  return key in obj
}

export const removeUndefinedValues = (obj: Record<string, any>) =>
  Object.keys(obj).reduce((prev, curr) => {
    return obj[curr] !== undefined
      ? {
          ...prev,
          [curr]: obj[curr],
        }
      : prev
  }, {})

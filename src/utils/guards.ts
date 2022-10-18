export function hasKey<K extends string, T extends object>(
  key: K,
  obj: T,
): obj is T & Record<K, unknown> {
  return key in obj
}

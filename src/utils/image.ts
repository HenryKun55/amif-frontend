export type Image = {
  id: string
  url: string
  file?: File
}

export function getDiffImages(old: Image[], current: Image[]) {
  const toUpload: Image[] = old.filter(
    oldImage => !current.some(currentImage => currentImage.id === oldImage.id),
  )
  const toDelete: Image[] = current.filter(
    currentImage => !old.some(oldImage => oldImage.id === currentImage.id),
  )
  return { toDelete, toUpload }
}

import type { SocialMediaItemFill } from './socialMediaItem'

export interface TeamWorker {
  name: string
  jobRole: string
  jobDescriptions: string[]
  specialty: string
  contactMeLinks: SocialMediaItemFill[]
  isReserved: boolean
  imageUrl: string
}

import Communities from '@/data/communities'

export const getCommunityById = async id => {
  return Communities.find(co => co.id === id)
}

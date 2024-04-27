export interface Community {
  name: string
  description: string
  imagePath: string
  tags: string[]
  social: {
    title: string
    link: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
  }[]
}

import GithubIcon from '@/icons/GithubIcon.astro'
import InstagramIcon from '@/icons/InstagramIcon.astro'
import LinkedinIcon from '@/icons/LinkedinIcon.astro'
import GlobeIcon from '@/icons/GlobeIcon.astro'
import GitlabIcon from '@/icons/GitlabIcon.astro'
import YoutubeIcon from '@/icons/YoutubeIcon.astro'

const Communities = [
  {
    id: 'openlab',
    name: 'Openlab Ecuador',
    description:
      'Laboratorio social de activistas que promueven la cultura libre. Participamos de actividades con comunidades tecnológicas.',
    tags: ['Software libre', 'Ciencia abierta', 'Scratch', 'Game Jams', 'OpenStreetMap'],
    social: [
      {
        icon: InstagramIcon,
        title: 'Instagram',
        link: 'https://www.instagram.com/openlabec'
      },
      {
        icon: LinkedinIcon,
        title: 'Linkedin',
        link: 'https://www.linkedin.com/company/openlabec'
      },
      {
        icon: GitlabIcon,
        title: 'GitLab',
        link: 'https://gitlab.com/openlabec'
      },
      {
        icon: GlobeIcon,
        title: 'Web',
        link: 'https://openlab.ec'
      }
    ],
    imagePath: 'openlabec.svg'
  },

  {
    id: 'dotnet-ecuador',
    name: 'DotNet Ecuador',
    description:
      'Espacio de intercambio entre desarrolladores y profesionales en tecnologías avanzadas, con énfasis en networking, aprendizaje continuo y mentoría personalizada.',
    tags: [
      'AI',
      'Networking',
      'Learning',
      'Mentorship',
      'Community building',
      'Professional development'
    ],
    social: [
      {
        icon: InstagramIcon,
        title: 'Instagram',
        link: 'https://www.instagram.com/dotnet_ecuador'
      },
      {
        icon: LinkedinIcon,
        title: 'Linkedin',
        link: 'https://www.linkedin.com/company/dotnet-ecuador/'
      },
      {
        icon: GithubIcon,
        title: 'Github',
        link: 'https://github.com/DotNet-Ecuador'
      }
    ],
    imagePath: 'dotnet-ecuador.webp'
  },
  {
    id: 'naanbits',
    name: 'Naanbits',
    description:
      'Espacio para personas interesadas en el mundo del desarrollo de Software, Cloud y Seguridad.',
    tags: [
      'Security',
      'Cloud',
      'Incident Response',
      'Mentorship',
      'Development'
    ],
    social: [
      {
        icon: InstagramIcon,
        title: 'Instagram',
        link: 'https://www.instagram.com/naanbits'
      },
      {
        icon: LinkedinIcon,
        title: 'Linkedin',
        link: 'https://www.linkedin.com/company/naanbits/'
      },
      {
        icon: YoutubeIcon,
        title: 'Github',
        link: 'https://youtube.com/@naanbits'
      }
    ],
    imagePath: 'naanbits.svg'
  }
]

export default Communities

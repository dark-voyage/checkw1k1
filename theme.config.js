import { useRouter } from 'next/router'

const Logo = ({ height }) => (
  <svg height={height} viewBox='0 0 70 70' fill='none'>
    <circle cx='35' cy='35' r='35' fill='currentColor' />
  </svg>
)

export default {
  project: {
    link: 'https://github.com/pwnosx/checkmed1a',
  },
  docsRepositoryBase: 'https://github.com/pwnosx/checkmed1a/blob/main/pages',
  titleSuffix: '',
  unstable_flexsearch: true,
  unstable_faviconGlyph: '⚫️',
  toc: {
    float: true,
    title: "Ushbu sahifafa"
  },
  logo: () => {
    const { route } = useRouter()
    return (
      <>
        <Logo height={18} />
        {route === '/' ? null : (
          <span
            className='mx-2 font-extrabold hidden md:inline select-none'
            title='pwnOSX'
            style={{
              paddingLeft: '10px',
              whiteSpace: 'nowrap'
          }}
          >
            pwnOSX
          </span>
        )}
      </>
    )
  },
  banner: {
    key: 'invitation',
    content: <a href="https://t.me/pwnosx" target="_blank">
      🎉 Biz ko'paymoqdamiz! →
    </a>,
  },
  search: {
    placeholder: "Qidirish...",
    loading: "Qidirilmoqda..."
  },
  head: ({ title, meta }) => {
    const ogImage =
      'https://repository-images.githubusercontent.com/429536908/62a4e686-8613-4b45-b7bb-fa35b558ae8e'

    return (
      <>
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta httpEquiv='Content-Language' content='uz' />
        <meta
          name='description'
          content="O'zbek dasturchilar uchun yaratilgan Apple ecosistema jamiyati."
        />
        <meta
          name='og:description'
          content="O'zbek dasturchilar uchun yaratilgan Apple ecosistema jamiyati."
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@uwussimo' />
        <meta name='twitter:image' content={ogImage} />
        <meta name='og:title' content={title ? title + ' – pwnOSX' : 'pwnOSX'} />
        <meta name='og:image' content={ogImage} />
        <meta name='apple-mobile-web-app-title' content='pwnOSX' />
      </>
    )
  },
  feedback: {
    content: "Savollar? Shu yerda qoldiring"
  },
  editLink: {
    text: () => {
      const {route} = useRouter()
      if (route.includes('/showcases/')) {
        return null
      }
      return "GitHub da o'zgartirish kiritish"
    },
  },
  nextThemes: {
    defaultTheme: 'system'
  },
  footer: {
    text: ({locale}) => {
      return (
        <p className='no-underline text-current font-semibold'>
          <a
            href='https://t.me/uwublog'
            target='_blank'
            rel='noopener'
            className='no-underline font-semibold'
          >
            UwUssimo Robinson
          </a>{' '}
          tomonidan yurutiladi
        </p>
      )
    },
  },
  gitTimestamp: true,
}

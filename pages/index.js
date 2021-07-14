import  MainGrid  from '../src/components/MainGrid'
import  Box  from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(propriedade) {
  return(
    <Box>
      <img src={`https://github.com/${propriedade.githubUser}.png`} style={{ borderRadius: '8px' }}/>
      <hr/>

      <a className="" href={`https://github.com/${propriedade.githubUser}`}>
        @{propriedade.githubUser}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault></AlurakutProfileSidebarMenuDefault>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'rosanaemidio';
  const pessoasFavoritas = ['jackelinenascimento', 'carolina-nobre', 'talibarbosa-hub', 'emamaia', 'RaissaMariaB']
  return(
    <>
      <AlurakutMenu />
      <MainGrid>
        <div style={{gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div style={{gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
              Bem vindo (a)
            </h1>
            <OrkutNostalgicIconSet />
          
          </Box>

        </div>
        <div style={{gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((pessoasFavorita) => {
                return (
                  <li>
                    <a href={`/users/${pessoasFavorita}`} key={pessoasFavorita}>
                      <img src={`https://github.com/${pessoasFavorita}.png`} />
                      <span>{pessoasFavorita}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}

import React from 'react';
import  MainGrid  from '../src/components/MainGrid'
import  Box  from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(propriedade) {
  return(
    <Box>
      <img src={`https://github.com/${propriedade.githubUser}.png`} style={{ borderRadius: '8px' }}/>
      <hr/>
      <p>
        <a className="boxlink" href={`https://github.com/${propriedade.githubUser}`}>
          @{propriedade.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault></AlurakutProfileSidebarMenuDefault>
    </Box>
  )
}

export default function Home() {
 
  const [comunidades, setComuninades] =  React.useState([{
      id:'1245',
      title:'Eu odeio acordar cedo',
      image:  'https://www.socialdub.com/groupspictures/8794/87941256111547021012.jpg?x2',   
  }]);
  const githubUser = 'rosanaemidio';
  const pessoasFavoritas = ['jackelinenascimento', 'carolina-nobre', 'talibarbosa-hub', 'emamaia', 'RaissaMariaB']
  return(
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer hoje?</h2>
            <form  onSubmit={function handleSubmit(event){
                event.preventDefault();
                const dadosDoForm = new FormData(event.target);

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                }

                const comunidadesAtualizadas = [...comunidades, 'Alura'];
                setComuninades(comunidadesAtualizadas)
            }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma url para usarmos de capa" 
                  name="image" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>

        </div>
        
        <div style={{gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((pessoasFavorita) => {
                return (
                  <li key={pessoasFavoritas}>
                    <a href={`/users/${pessoasFavorita}`} key={pessoasFavorita}>
                      <img src={`https://github.com/${pessoasFavorita}.png`} />
                      <span>{pessoasFavorita}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}

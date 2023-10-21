import { Main, ImageHeader, Img, Separator,ConteinerHeader, Icons, ContainerIcons, BotaoLogin, HeaderTitle, SeparadorBeneficios, Beneficio, Correto, Frases , Cards, Card, ImgCard} from 
'./styles'
import WatchFitLogo from './assets/img/Watchfit-logo.png'
import Instagran from './assets/img/icon/instagram.png'
import Google from './assets/img/icon/google.png'
import Aceito from './assets/img/informations/aceitar.png'
function App() {

  return (
    <>
        <Main>
          <ImageHeader>
            <Img src={WatchFitLogo} />
          </ImageHeader>
          <Separator />
          <ConteinerHeader>
            <BotaoLogin>
              <span>Cadastre-se</span>
            </BotaoLogin>
           <ContainerIcons>
            <Icons src={Google}/>
            <Icons src={Instagran}/>
           </ContainerIcons>
          </ConteinerHeader>
          <HeaderTitle>
            A tecnologia que transforma uma academia
          </HeaderTitle>
          <SeparadorBeneficios>
            <Beneficio >
              <Correto src={Aceito}/>
              <Frases>Fácil usabilidade</Frases>
            </Beneficio>
            <Beneficio >
              <Correto src={Aceito}/>
              <Frases>Rápido acesso</Frases>
            </Beneficio>
            <Beneficio >
              <Correto src={Aceito}/>
              <Frases>inovador</Frases>
            </Beneficio>
            <Beneficio >
              <Correto src={Aceito}/>
              <Frases>Melhor suporte</Frases>
            </Beneficio>
          </SeparadorBeneficios>
          <Cards>
            <Card>
              <ImgCard src={Aceito}/>
            </Card>
          </Cards>
        </Main>
    </>
  )
}

export default App

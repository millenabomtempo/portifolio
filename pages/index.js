import React from 'react';
import Card from '../src/components/commons/Card';
import Cover from '../src/components/commons/Cover';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import ProjetWrapper from '../src/components/commons/ProjetWrapper';
import Text from '../src/components/fundation/Text';

export default function Home() {
  return (
    <div>
      <Cover />
      <Header />
      <ProjetWrapper>
        <Text
          tag="h1"
          variant="title"
          textAlign="center"
          color="#EFF1F8"
        >
          Meus Projetos
        </Text>
        <Card.Wrapper>
          <Card>
            <Card.Title>
              Título do Projeto
            </Card.Title>
            <Card.Image />
            <Card.Description
              visibility={{
                xs: 'hidden',
                sm: 'visible',
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor perferendis
            </Card.Description>
          </Card>
          <Card>
            <Card.Title>
              Título do Projeto
            </Card.Title>
            <Card.Image />
            <Card.Description
              visibility={{
                xs: 'hidden',
                sm: 'visible',
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor perferendis
            </Card.Description>
          </Card>
          <Card>
            <Card.Title>
              Título do Projeto
            </Card.Title>
            <Card.Image />
            <Card.Description
              visibility={{
                xs: 'hidden',
                sm: 'visible',
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor perferendis
            </Card.Description>
          </Card>
        </Card.Wrapper>
        <Card.Main>
          <Card.Image />
          <Card.Title>
            Título do Projeto
          </Card.Title>
          <Card.Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor perferendis
          </Card.Description>
        </Card.Main>
      </ProjetWrapper>
      <Footer />
    </div>
  );
}

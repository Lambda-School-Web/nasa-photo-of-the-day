import styled from "styled-components";

export const AppDiv = styled.div`
  text-align: center;
  width: 100%;
`;
export const ContainerDiv = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export const DescDiv = styled.div`
  text-align: left;
`;

export const FooterDiv = styled.div`
  font-size: 0.9rem;
  color: #767676;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const NasaH1 = styled.h1`
  font-family: "Russo One", sans-serif;
  font-size: 3.5rem;
  color: #0b3d91;
`;

export const TitleH2 = styled.h2`
  color: #484848;
  font-size: 2.5rem;
  font-family: "Roboto Mono", monospace;
`;

export const NasaImg = styled.img`
    max-width: 800px
    height: auto
`;

export const NasaP = styled.p`
  font-family: "Roboto Mono", monospace;
`;

export const DescP = styled(NasaP)`
  color: #767676;
  font-size: 1.3rem;
`;

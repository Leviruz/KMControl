import { styled } from "styled-components";

export const FooterStyle = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #0137a3;
  padding: 50px;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;

  .logo{
    height: 50px;
    padding-left: 50px;
  }
  .copyright{
    display: flex; 
    padding: 5px 15px;
  }
  .copyright p{
    font-size: 20px;
  }
`;
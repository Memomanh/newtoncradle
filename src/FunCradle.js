import styled from "styled-components";
import "./Cradle.css"
function Cradle() {
    return (
        <Wrapper className="d">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          
            <span></span>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  
  display: flex;
  //gap: 1rem;
  border-top: .3rem solid #4F4557;
  padding: 0 .5rem;
  
  span{
    display: inline-block;
    width: .3rem;
    height: 14rem;
    margin: 0 .75rem;
    background-color: #4F4557;
    position: relative;
    
    
    &::before{
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1rem;
      height: 1rem;
      background-color: #6D5D6E;
      border-radius: 50%;
    }
    
    &:first-child{
      animation: left-child 3s linear infinite;
      transform-origin: top;
    }
    
    @keyframes left-child{
      0%{rotate: 0deg}
      25%{rotate: 60deg}
      50%{rotate: 0deg}
      100%{rotate: 0deg}
    }

    &:last-child{
      animation: right-child 3s linear infinite 1.5s;
      transform-origin: top;
    }

    @keyframes right-child{
      0%{rotate: 0deg}
      25%{rotate: -60deg}
      50%{rotate: 0deg}
      100%{rotate: 0deg}
    }
  }
`

export default Cradle;
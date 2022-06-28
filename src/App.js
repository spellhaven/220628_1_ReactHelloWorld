import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    const i = 1;
    const ganzistorm = {
      color: 'DarkBlue',
      fontsize: '20px'
    };
      return ( 
        <div>
          {
            // 10 + 20 == 30 && (<div>맞습니다</div>)
            // 10 + 20 == 300 ? (<div>맞습니다</div>) : (<div>틀림 ㅋ</div>)

            (() => { // function() 대신 () => 가능.
              if (i==1) return (<div>i는 1입니다.</div>)
              if (i==2) return (<div>i는 2입니다.</div>)
              if (i==3) return (<div>i는 3입니다.</div>)

            })() // React 쉬운 거 맞아? if문 쓰는데도 이렇게 괄호 덕지덕지인데

          }

          <div id = "hellotext">안녕하세요</div>
          <div style = {ganzistorm}>반갑습니다</div>
          <div className='classTest'>가입인사드립니다.</div>
        </div>
      )
  }
}

export default App;

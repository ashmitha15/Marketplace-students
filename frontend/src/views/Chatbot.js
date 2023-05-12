import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import Chatting from './components/Chatting';
class SimpleForm extends Component {
  render() {
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#8faed9',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#8faed9',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
      const config ={
        width: "400px",
        height: "450px", 
      };
    return (
        <>
            <Header/>
            <div style={{height:'30px'}}>''</div>
            <div style={{display:'flex'}}>
            <ThemeProvider theme={theme}>
            <ChatBot 
                steps={[
                {
                    id:'intro', 
                    message:'What is your query about?', 
                    trigger:'intro-user',
                },
                {
                    id:'intro-user', 
                    options:[
                    {value:1,label:'Products related', trigger:'product'},
                    {value:2,label:'Clubs related', trigger:'clubs'},
                    {value:3,label:'Orders related', trigger:'product'},
                    {value:4,label:'Something else', trigger:'contact'},
                    ],
                },
                {
                    id:'product', 
                    message:'what to you want to know',
                    trigger:'productOptions'
                },
                {
                    id:'productOptions',
                    options:[
                        {value:1,label:'payment options', trigger:'payment'},
                        {value:2,label:'delivery', trigger:'payment'},
                        {value:3,label:'return/exchange', trigger:'return'},
                    ] ,
                },
                {
                    id:'clubs', 
                    message:'what to you want to know?',
                    trigger:'clubsOptions'
                },
                {
                    id:'clubsOptions',
                    options:[
                        {value:1,label:'Join club', trigger:'join'},
                        {value:2,label:'Know more', trigger:'learn'},
                    ] ,
                    trigger:'menu'
                },
                {
                    id:'payment', 
                    message:'You can pay via cash or through card. Do you want anymore help?', 
                    trigger:'menu'
                },
                {
                    id:'delivery', 
                    message:'Your order will be delivered to you in maximum of 48 hours.  Do you want to learn more?', 
                    trigger:'menu'
                },
                {
                    id:'return', 
                    message:'There is no return or exchange, untill and unless the product recived is damaged.  Do you want to learn more?', 
                    trigger:'menu'
                },
                {
                    id:'join', 
                    message:'Open the club and click on join club button. Do you want to learn more?', 
                    trigger:'menu'
                },
                {
                    id:'learn', 
                    message:'open the club link and read the description below. Do you want any other help?', 
                    trigger:'menu'
                },
                {
                    id:'contact', 
                    message:'Please click on contact us link on the header bar. Do you want any other help?', 
                    trigger:'menu'
                },
                {
                    id:'menu',
                    options:[
                        {value:1,label:'Yes',trigger:'intro'},
                        {value:2,label:'no',trigger:'no'}
                    ]
                },
                {
                    id:'no', 
                    message:'Thank you. Have a nice day', 
                    end:true,
                },
                ]}
                {...config}
            />
            </ThemeProvider>
            <Chatting/>
            </div>
        </>
    );
  }
       
}

export default SimpleForm;
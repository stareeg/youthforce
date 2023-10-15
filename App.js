import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // Кнопки cистема оповещения
  const alarmFire = document.querySelector('#alarm-fire');
  const alarmLeak = document.querySelector('#alarm-leak');
  // Кнопки cистема мониторинга
  const monitorClimate = document.querySelector('#monitor-climate');
  const monitorVisit = document.querySelector('#monitor-visit');
  // Кнопки система отчетности
  const reportBot = document.querySelector('#report-bot');
  const reportFile = document.querySelector('#report-file');
  // Кнопки система управления
  const controlMusic = document.querySelector('#control-music');
  const controlCruise = document.querySelector('#control-cruise');
  // Поля ввода Температура
  const tempNow = document.querySelector('#temp_now');
  const tempAvg = document.querySelector('#temp_avg');
  const tempPlan = document.querySelector('#temp_plan');
  // Поля ввода Освещение
  const lightNow = document.querySelector('#light_now');
  const lightAvg = document.querySelector('#light_avg');
  const lightPlan = document.querySelector('#light_plan');
  // Поля ввода Сотрудники
  const personalNow = document.querySelector('#personal_now');
  const personalAvg = document.querySelector('#personal_avg');
  const personalPlan = document.querySelector('#personal_plan');

  const [data, setData] = useState('');

  const handleClick1 = () => {
    axios.post('http://62.84.127.76:5000/', { data: data })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClick2 = () => {
    axios.post('http://62.84.127.76:5000/', { data: data })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClick3 = () => {
    axios.post('http://62.84.127.76:5000/', { data: data })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClick4 = () => {
    axios.post('http://62.84.127.76:5000/', { data: data })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClick5 = () => {
    axios.post('http://62.84.127.76:5000/', { data: data })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClick6 = () => {
    axios.post('http://62.84.127.76:5000/', { data: data })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClick7 = () => {
    axios.post('http://62.84.127.76:5000/', { data: data })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClick8 = () => {
    axios.post('http://62.84.127.76:5000/', { data: data })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <header>
        <img src="img/logo.svg"/>
        <h1>SmartManager</h1>
      </header>

  
  <main>


    <article class="metrics">
      

      <section>
        <div>
          <div>
            <img src="img/thermo.svg"/>
            <h1>Температура</h1>
          </div>
          
  
          <div>
            <p>Сейчас</p>
            <input type="number" id="temp_now" value="0" readonly/>
          </div>

          <div>
            <p>Среднее</p>
            <input type="number" id="temp_avg" value="0" readonly/>
          </div>

          <div>
            <p>План</p>
            <input type="number" id="temp_plan" value="0" readonly/>
          </div>
        </div>
      </section>
      

      <section>
        <div>
          <div>
            <img src="img/lamp.svg"/>
            <h1>Освещение</h1>
          </div>
            

          <div>
            <p>Сейчас</p>
            <input type="number" id="light_now" value="0" readonly/>
          </div>
   
          <div>
            <p>Среднее</p>
            <input type="number" id="light_avg" value="0" readonly/>
          </div>
   
          <div>
            <p>План</p>
            <input type="number" id="light_plan" value="0" readonly/>
          </div>
        </div>
      </section>
      
  
      <section>
        <div>
          <div>
            <img src="img/clowns.svg"/>
            <h1>Сотрудники</h1>
          </div>
          
     
          <div>
            <p>Сейчас</p>
            <input type="number" id="personal_now" value="0" readonly/>
          </div>

          <div>
            <p>Среднее</p>
            <input type="number" id="personal_avg" value="0" readonly/>
          </div>
  
          <div>
            <p>План</p>
            <input type="number" id="personal_plan" value="0" readonly/>
          </div>
        </div>
      </section>
      
    </article>


    <article>
      <div>
        <img src="img/notification.svg"/>
        <h1>Уведомления</h1>
      </div>
      
      <div>
        <p>текст</p>
      </div>
    </article>


    <article>
      <div>
        <img src="img/gears.svg"/>
        <h1>Функционал</h1>
      </div>
    </article>

    <article class="systems">

      <section>
        <p>cистема оповещения</p>
        <div>
          <button id="alarm-fire" onClick={handleClick1} value={1}>сообщить о пожаре</button>
          <button id="alarm-leak" onClick={handleClick2} value={2}>сообщить о протечке</button>
        </div>
      </section>
    

      <section>
        <p>cистема мониторинга</p>
        <div>
          <button id="monitor-climate" onClick={handleClick3} value={3}>климат-контроль</button>
          <button id="monitor-visit" onClick={handleClick4} value={4}>посещаемость</button>
        </div>
      </section>
    </article>

    <article class="systems">
  
      <section>
        <p>система отчетности</p>
        <div>
          <button id="report-bot" onClick={handleClick5} value={5}>выгрузить в Telegram</button>
          <button id="report-file" onClick={handleClick6} value={6}>выгрузить как файл</button>
        </div>
      </section>


      <section>
        <p>система управления</p>
        <div>
          <button id="control-music" onClick={handleClick7} value={7}>автошафл музыки</button>
          <button id="control-cruise" onClick={handleClick8} value={8}>круиз-контроль</button>
        </div>
      </section>
    </article>
  </main>
    </div>
  );
}

export default App;


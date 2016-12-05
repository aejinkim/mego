import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import '../styles/home-page.css';


const MainForm = ({todoList}) => {
  const handleClick = (todoItem) => {
    // 화면 뛰우기
    window.alert(todoItem.name);
  };

  return (
    <div>

      <div className="mylist">
        <div className="mylist-info ui two column centered grid">
          <div className="four column centered row">
            <div className="mylist-info-text">
              <p className="went">갈꺼야 23</p>
              <img className="mylist-user-icon" src={require('../images/user-icon.png')} />
              <p className="went">갔었어 23</p>
            </div>

          </div>
        </div>
        <div className="ui two column centered grid">
          <div className="column">
            <div className="mylist-button">
              <button className="ui primary button">My List</button>
              <button className="ui green button">My List</button>
              <button className="ui button">My List</button>
              <button className="ui button">My List</button>
              <button className="ui button">My List</button>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        {todoList.map(t => {
          return (
            <figure key={t.name} onClick={handleClick.bind(this, t)}>
              <figcaption className="title">{t.name}</figcaption>
              <img src={t.picture} />
              <figcaption className="subtitle">{t.tag}</figcaption>
            </figure>
          );
        })}
      </div>

      <ol>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  );
};

MainForm.propTypes = {
  todoList: PropTypes.array.isRequired
};

// FuelSavingsForm.propTypes = {
//   saveFuelSavings: PropTypes.func.isRequired,
//   calculateFuelSavings: PropTypes.func.isRequired,
//   fuelSavings: PropTypes.object.isRequired
// };

export default MainForm;

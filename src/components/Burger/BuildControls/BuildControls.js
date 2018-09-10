import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = props => {
  return (
      <div className={classes.BuildControls}>
          <h3>Current Price: {props.price.toFixed(2)}</h3>
          {controls.map(ctrl => (<BuildControl
              key={ctrl.label}
              label={ctrl.label}
              type={ctrl.type}
              disabled={props.disabled[ctrl.type]}
              added={props.ingredientAdded.bind(this, ctrl.type)}
              removed={props.ingredientRemoved.bind(this, ctrl.type)}
          />))}
          <button
              disabled={!props.purchasable}
              onClick={props.ordered}
              className={classes.OrderButton}
          >{props.isAuth ? 'ORDER NOW' : 'SIGNUP TO ORDER'}</button>
      </div>
  );
};

export default buildControls;
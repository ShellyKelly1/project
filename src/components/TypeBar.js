import React, { useContext } from "react";
import "./css/NavMenu.css";
import {observer} from 'mobx-react-lite'
import { Context } from "../index";
import './css/TypeBar.css'

const TypeBar = observer(() => {
    const {product} = useContext(Context)
  return (
    <div className="TypeBarMain">
      <p
				className='TypeBarText'
				key={0}
				onClick={() => {
					product.setSelectedType(null);
					console.log()
				}}
			>
				Все
			</p>
			{product.types.map((type) => (
				<p
					className='TypeBarText'
					key={type.id}
					onClick={() => {
						product.setSelectedType(type.id);
						console.log(type.id)
					}}
				>   
					{type.name}
				</p>
			))}
    </div>
  );
});

export default TypeBar;


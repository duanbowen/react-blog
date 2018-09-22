import React, { Component } from 'react';
import style from './style.less';

class SecondHeader extends Component {
	render() {
		return (
			<div className={style['second-header']}>
				<nav className={style['container']}>
					<ul>
						<li className="active">首页</li>
						<li>前端</li>
						<li>NodeJS</li>
						<li>简历</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default SecondHeader;
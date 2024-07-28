import React from 'react';

function tableheader(){
 return (
    <div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Name</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Age</a></div>
			<div class="header__item"><a id="draws" class="filter__link " href="#">Position</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Jersey Number</a></div>
	</div>
 );

}

export default tableheader;
<?php 

function google() {
	$pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
	$bigURL = explode('/', $pageURL);
	$urlServer =  substr($bigURL[0],0, 4);

	$live = 'UA-44313913-1';
	$beta = 'UA-44001529-1';
	$server = 'na';

	if ($urlServer === 'beta') {
		$server = $beta;
	} else {
		$server = $live;

	}

	echo "'" . $server . "'";
}



?>

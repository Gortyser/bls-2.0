<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$comment = $_POST['comment'];
	$to = "gortyser@gmail.com";
	$subject = "Приглашение к сотрудничеству";
	$body = "Имя: $name \n\nEmail: $email \n\nТелефон: $phone \n\nКомментарий: $comment \n\nТема: $subject";
	$headers = "From: 'Blue Sail' <info@bluesailvodka.com>";
	$result = mail($to, $subject, $body, $headers);
?>
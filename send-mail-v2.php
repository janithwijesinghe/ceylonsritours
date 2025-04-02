<?php
	$mail_to = 'ceylonsritoursbm@gmail.com'; // specify your email here

	// Assigning data from $_POST array to variables
	$name = $_POST['name'];
	$mail_from = $_POST['Email'];
	$areacode = $_POST['AreaCode'];
	$phone = $_POST['Number'];
	$date = $_POST['DText'];
	$time = $_POST['Time'];
	$rdate = $_POST['RText'];
	$rtime = $_POST['RTime'];
	$paddress = $_POST['PickupAddress'];
	$daddress = $_POST['DestinationAddress'];
	$jtype = $_POST['journey'];
	$vtype = "Tuk Tuk";
	//$vtype = $_POST['journeyV'];
	// $message = $_POST['sender_message'];
	
	
	
	// Construct subject of the email
	$subject = 'www.mysite.com Message from visitor ' . $name;

	// Construct email body
	$body_message = 'From: ' . $name . "\r\n";
	$body_message .= 'E-mail: ' . $mail_from . "\r\n";
	$body_message .= 'Phone: ' . $areacode . $phone . "\r\n";
	$body_message .= 'Departure Date: ' . $date . "\r\n" ;
	
	$body_message .= 'Departure Time: ' . $time . "\r\n";
	$body_message .= 'Return Date: ' . $rdate . "\r\n";
	$body_message .= 'Return Time: ' . $rtime . "\r\n";
	$body_message .= 'Pickup Address: ' . $paddress . "\r\n";
	$body_message .= 'Destination Address: ' . $daddress . "\r\n";
	$body_message .= 'Journey Type: ' . $jtype . "\r\n";
	$body_message .= 'Type of Vehicle: ' . $vtype . "\r\n";

	// Construct headers of the message
	$headers = 'From: ' . $mail_from . "\r\n";
	$headers .= 'Reply-To: ' . $mail_from . "\r\n";

	$mail_sent = mail($mail_to, $subject, $body_message, $headers);

	if ($mail_sent == true){ ?>
		<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'index.html';
		</script>
	<?php } else { ?>
    <script language="javascript" type="text/javascript">
        alert('Message not sent. Please, notify site administrator admin@admin.com');
        window.location = 'index.html';
    </script>
	<?php
	}
?>
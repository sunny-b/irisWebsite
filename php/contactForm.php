<?php
	$action=$_REQUEST['action'];
	$class = "";
	$class2 = "";
	$class3="";
	$value="";
	$value2="";
	$value3="";
	$placeholder="Your Name";
	$placeholder2="Your Email";
	$placeholder3="Your Message...";
	function echoForm($class,$class2,$class3,$value,$value2,$value3,$placeholder,$placeholder2,$placeholder3) {
		echo '
	    <form class="contactForm"  action="" method="POST" enctype="multipart/form-data">
	    <input type="hidden" name="action" value="submit">
	    <br>
	    <input value="'.$value.'" class="'.$class.'" name="namey" type="text" placeholder="'.$placeholder.'" size="30"/><br>
	    <br>
	    <input value="'.$value2.'" class="'.$class2.'" name="email" type="text" placeholder="'.$placeholder2.'" size="30"/><br>
	    <br>
	    <textarea class="'.$class3.'" placeholder="'.$placeholder3.'"name="message" rows="7" cols="30">'.$value3.'</textarea><br>
	    <input type="submit" name="name" value="Send"/>
	    </form>';
	}
	
	if ($action=="")    /* display the contact form */
	    {
	    	echoForm($class,$class2,$class3,$value,$value2,$value3,$placeholder,$placeholder2,$placeholder3);
	    }
	else                /* send the submitted data */
	    {
	    $name=$_REQUEST['namey'];
	    $email=$_REQUEST['email'];
	    $message=$_REQUEST['message'];
	    $value=$name;
	    $value2=$email;
			$value3=$message;
	 		$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
	 
			if ($name==""&&$email==""&&$message==""){
				$class="error";
				$class2="error";
				$class3="error";
				$placeholder="Please Include Your Name";
				$placeholder2="Please Include Your E-Mail";
				$placeholder3="Please Include Your Message"; 
				
				echoForm($class,$class2,$class3,$value,$value2,$value3,$placeholder,$placeholder2,$placeholder3);
				
			} else if ($name=="")
	        {
	        $class="error";
					$placeholder="Please Include Your Name";
	      	
	      	echoForm($class,$class2,$class3,$value,$value2,$value3,$placeholder,$placeholder2,$placeholder3);
					
	  } else if ($email=="") {
	  			$class2="error";
	        $placeholder2="Please Include Your E-Mail";
					
					echoForm($class,$class2,$class3,$value,$value2,$value3,$placeholder,$placeholder2,$placeholder3);
	  		
	  	
	  } else if($message==""){
	  		$class3="error";
	      $placeholder3="Please Include Your Message";  
					
					echoForm($class,$class2,$class3,$value,$value2,$value3,$placeholder,$placeholder2,$placeholder3);
			
			
	  } else if(!preg_match($email_exp,$email)) {
	 		$class2="error";
			$placeholder2="E-Mail not valid, please enter valid e-mail address";
			$value2="";
					echoForm($class,$class2,$class3,$value,$value2,$value3,$placeholder,$placeholder2,$placeholder3);
	 
	  }
	    else{
	        $from="From: $name<$email>\r\nReturn-path: $email";
	        $subject="Message sent using your contact form";
	        mail("irissprague@gmail.com", $subject, $message, $from);
	        echo "<div class='messageSent'><img src='img/OK_hand.png' class='hand'></div>";
	        
	        }
	    }
	?>
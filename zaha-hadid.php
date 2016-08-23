<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Iris Sprague | Designer</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta property="og:site_name" content="Iris Sprague | Designer">
		<meta property="og:title" content="Iris Sprague | Designer">
		<meta property="og:type" content="website">
		<link rel="stylesheet" href="http://fonts.indiantypefoundry.com/WF-019442-001445.css" type="text/css" />
		<link rel="stylesheet" href="css/allSlider.min.css">
		<script src="js/modernizr.custom.js"></script>
 		
	</head>
	
	<body class="home colorNormal">
		<div class="page">
		<?php
			require 'php/header2.php';
		?>
		<div class="moving">	
			<div class="middlecontainer" >
			  <div class="container-fluid">
			    <div class="container ">
			      <div class="row-fluid">
			        <div class="col-lg-12  col-md-12 col-sm-12">
							 <div id="myCarousel" class="carousel slide" data-ride="carousel">
			            <!-- Indicators -->
			
			            <!-- Wrapper for slides -->
			            <div class="carousel-inner" role="listbox">
			              <div class="item img-responsive active">
			                <img class="scale0" src="img/zaha/59_img_gallery_zaha.gif" alt="Responsive image">
			              </div>
			
			              <div class="item second img-responsive">
			                <img class="scale1" src="img/zaha/60_img_gallery_zaha.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item img-responsive">
			                <img class="scale2" src="img/zaha/61_img_gallery_zaha.jpg" alt="Responsive image">
			              </div>
			
			              <div class="item img-responsive">
			                <img class="scale3" src="img/zaha/62_img_gallery_zaha.jpg" alt="Responsive image">
			              </div>
										
										 <div class="item img-responsive">
			                <img class="scale3" src="img/zaha/63_img_gallery_zaha.jpg" alt="Responsive image">
			              </div>
			              
			               <div class="item img-responsive">
			                <img class="scale3" src="img/zaha/64_img_gallery_zaha.jpg" alt="Responsive image">
			              </div>
													
			              <div class="item third img-responsive">
			                <img class="scale4" src="img/zaha/65_img_gallery_zaha.jpg" alt="Responsive image">
			              </div>
			              
			              <div class="item last img-responsive">
			                <img class="scale4" src="img/zaha/65_img_gallery_zaha.jpg" alt="Responsive image">
			              </div>
			              <div class="accolades2">
												<a class="prev-next" id="next2" href="theo-superfamily.php">Next:<br>Theo Superfamily</a>
												
												<br>
												
													<a class="prev-next" id="prev2" href="jiminie-ha.php">Previous:<br>Lecture Posters</a>
										</div>
			
			            </div>
					
					<!-- Left and right controls -->
			           	<div class="navigation-control">
				            <a class="left carousel-control" href="#myCarousel" role="button" style="cursor:w-resize" data-slide="prev">
				              <!-- <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> -->
				              <span class="sr-only">Previous</span>
				            </a>
				            <a class="right carousel-control" href="#myCarousel" role="button" style="cursor:e-resize" data-slide="next">
			            </div>	
			              <!-- <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> -->
			              <span class="sr-only">Next</span>
			            </a>
			          </div>
			          </div><!-- end col-->
			        </div><!-- end rowfluid-->
			      </div> <!-- container-->
			    </div><!-- container fluid-->
				</div><!-- visiblecontainer-->
				
				
		<div class="wrapper">
			<div class="content">	
				<div class="about">
				<h3>Zaha Hadid</h3>
				<h4>Branding / Identity / Web Design</h4>
				
				<p>This rebrand of the architect <a href="http://www.zaha-hadid.com/" target="_blank">Zaha Hadid</a> was inspired by her paintings and her innovative constructions. Hadid envisions her constructions from multiple perspectives, creating a parallax within one frame. Using this concept, I recreated her infrastructures, wire frames, and viewpoints to create a responsive logo.</p>
					
			</div>	
			<div class="content-break"></div>
			<div class="mobileNP">
				<a class="mobileNepr" href="jiminie-ha.php">Previous:<br>Lecture Series Posters</a>
				<a class="mobileNepr" href="theo-superfamily.php">Next:<br>Theo Superfamily</a>
			</div>
			<div class="accolades">
				<a class="next-prev" id="next" href="theo-superfamily.php">Next:<br>Theo Superfamily</a>
				
				<br>
				
					<a class="next-prev" id="prev" href="jiminie-ha.php">Previous:<br>Lecture Series Posters</a>
			</div>
		</div>
	
				

<?php
			require 'php/overlay.php';	
					
			
		?>
	<footer>
		<?php
			require 'php/footersocial.php';
		
			require 'php/footerfixed.php';
		?>
	</footer>
	</div>
</div>
	<?php
			require 'php/scriptsCarousel.php';
		?>
	</body>
</html>